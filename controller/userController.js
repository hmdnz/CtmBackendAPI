

const bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")
const User = require("../models/userModel")

// @desc Register a user
// @route POST /api/users/register
// @access public
const registerUser = async (req,res)=>{
    const {username, email,password}= req.body
    if (!username || !email || !password){
        return res.status(400).json({message:"All fields are mandatory"})
    }
    const userAvailable=await User.findOne({email})
    if(userAvailable){
        res.status(400).json({message:"User already registered!"})
    }

//Hash password
const hashedPassword=await bcrypt.hash(password, 10)
console.log("Hashed password ", hashedPassword)
const user =await User.create({
    username,
    email,
    password:hashedPassword
})

console.log(`User Created ${user}`)
if(user){
    res.status(201).json({_id:user.id, email:user.email})
}else{
    res.status(400).json({message:"User data is not valid!"})
}
    }  

// @desc Login a user
// @route POST /api/users/login
// @access public
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are mandatory" });
    }

    const user = await User.findOne({ email });

    // Compare stored password with hashed password
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                // Payload
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
        );

        return res.status(200).json({ accessToken });
    } else {
        return res.status(401).json({ message: "email or password is not valid!" });
    }
};



    
    // @desc Current  user
// @route POST /api/users/current
// @access public
const currentUser = async (req,res)=>{
    res.json({message:"Current user information"})
    }


    module.exports={
        registerUser,
        loginUser,
        currentUser
    }
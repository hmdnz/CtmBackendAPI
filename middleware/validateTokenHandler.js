
const jwt= ("jsonwebtoken")


const validateToken =async(req,res,next)=>{
let token
let authHeader =req.headers.Authorization || req.headers.Authorization
if(authHeader && authHeader.startsWith("Bearer")){
    token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded)=>{
        if(err){
            res.status(401).json({message:"User is not authorized"})
        }
        console.log(decoded)
    })


}

}

module.exports=validateToken
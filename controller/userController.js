// @desc Register a user
// @route POST /api/users
// @access public
const registerUser = async (req,res)=>{
    res.json({message:"Register the user"})
    }  


    module.exports={
        registerUser,
    }
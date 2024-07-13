const express = require("express");
const { registerUser } = require("../controller/userController");


const router = express.Router();


// User Registeration
router.post("/register", registerUser  )

// User Login
router.post("/login", (req,res)=>{
    res.json({message:"Login user"})
    })

    // Current Login
router.post("/current", (req,res)=>{
    res.json({message:"Current user information"})
    })


module.exports = router;

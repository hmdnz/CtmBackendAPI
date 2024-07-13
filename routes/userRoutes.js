const express = require("express");
const router = express.Router();
const {
  
} = require("../controller/contactController");

// User Registeration
router.post("/register", (req,res)=>{
res.json({message:"Register the user"})
})

// User Login
router.post("/login", (req,res)=>{
    res.json({message:"Login user"})
    })

    // Current Login
router.post("/current", (req,res)=>{
    res.json({message:"Current user information"})
    })


module.exports = router;

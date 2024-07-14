const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controller/userController");


const router = express.Router();


// User Registeration
router.post("/register", registerUser  )

// User Login
router.post("/login", loginUser)

    // Current Login
router.post("/current",currentUser )


module.exports = router;

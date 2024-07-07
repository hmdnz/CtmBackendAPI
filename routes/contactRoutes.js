const express = require ('express')
const router = express.Router()

// Calling a route with @router.route
router.route('/').get((req, res)=>{
res.status(200).json({"message":"Get all contacts"})
})


module.exports = router
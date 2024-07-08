const express = require("express")
const dotenv =require("dotenv").config
const connectDb=require("./config/dbConnection")
const app = express()


const PORT =process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use('/api/contacts/', require('./routes/contactRoutes'))

app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
}) 
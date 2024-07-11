const express = require("express")
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv")

console.log("Connection String: ", process.env.CONNECTION_STRING);
// Load environment variables
dotenv.config();

connectDb()

const app = express()


const PORT =process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use('/api/contacts/', require('./routes/contactRoutes'))

app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
}) 
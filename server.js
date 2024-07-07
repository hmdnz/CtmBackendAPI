const express = require("express")
const dotenv =require("dotenv").config

const app = express()


const PORT =process.env.PORT || 5000

app.get('/api/contacts',(req, res)=>{
res.send ("<h1> Hello fron NodeJs Server</h1>")
})

app.listen(PORT, () =>{
console.log(`Server running on port ${PORT}`)
}) 
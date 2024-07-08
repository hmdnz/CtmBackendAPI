 const mongoose = require('mongoose')

 const connectionDb =async ()=>{
    try {
        const connect=await mongoose.connect
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

 }

 module.exports=connectionDb
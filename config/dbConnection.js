 const mongoose = require('mongoose')

 const connectionDb =async ()=>{
    try {
        const connect=await mongoose.connect(process.env.CONNETION_STRING)
        console.log('Database Connected!!!', connection.host, connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

 }

 module.exports=connectionDb
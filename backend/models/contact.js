const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
        trim:true,
    },
    last_name: {
        type: String,
        required:true,
        trim: true,
    },
    message: {
        type: String,
        required:true,
        trim: true,
    }
})


  const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact
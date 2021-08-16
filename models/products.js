const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type : String,
        required: true
    },
    productid:{
        type : String,
        required: true
    },
    productPrice : {
        type:String,
        required:true,
        default: '0.0'
    }
})

module.exports = mongoose.model('Products',productSchema)
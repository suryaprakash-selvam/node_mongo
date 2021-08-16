const mongoose = require('mongoose')

const feildSchema = new mongoose.Schema({
    Name:{
        type : String,
        required: true
    },
    StreetAddress:{
        type : String,
        required: true
    },
    Province : {
        type:String,
        required:true,
    },
    Country : {
        type:String,
        required:true,
    },
    postalCode : {
        type:Number,
        required:true
    },
    Product:{
        type:String,
        required:false,
        default:null
    },
    product2 : {
        type:String,
        required:false,
        default:null
    },
    product3 : {
        type:String,
        required:false,
        default:null
    },
    deliveryTime : {
        type:Date,
        required:false,
        default:null
    }

})

module.exports = mongoose.model('feild',feildSchema)
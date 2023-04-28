const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoeSize: {type:Number,min:5},
shoeType: String,
shoeBrand: {type:String,maxLength:20},
})
module.exports = mongoose.model("Shoe",
shoeSchema)
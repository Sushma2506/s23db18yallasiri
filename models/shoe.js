const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
shoeSize: Number,
shoeType: String,
shoeBrand: String,
})
module.exports = mongoose.model("Shoe",
shoeSchema)
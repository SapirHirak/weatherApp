const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const DBschema  = new Schema( {
    name: String,
    updatedAt: Date,
    temperature: Number,
    condition: String,
    conditionPic: String
} )

module.exports = DBschema
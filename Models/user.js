const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var UserSchema = new Schema(
{
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    address: String,
    password: String
},
{
    timestamps: true
});
module.exports = mongoose.model("User", UserSchema);
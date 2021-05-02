const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var CountrySchema = new Schema({
    country: String
});
module.exports = mongoose.model("Country", CountrySchema);
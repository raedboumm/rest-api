const mongoose = require("mongoose");

const ApiSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});
const api = mongoose.model("Api", ApiSchema); 
module.exports = api;

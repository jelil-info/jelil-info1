const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
 
  },
  text: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
 
  }
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;
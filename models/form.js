const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
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

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
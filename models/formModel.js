const mongoose = require('mongoose');

// Define schema for form data
const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

// Create and export Mongoose model
const FormData = mongoose.model('FormData', FormSchema);
module.exports = FormData;

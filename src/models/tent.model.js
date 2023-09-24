// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const tentSchema = new Schema({
  images: { type: [String], required: true },
  maxGuest: { type: Number, required: true },
  descriptionVN: { type: String },
  descriptionEN: { type: String },
});

module.exports = mongoose.model("tent", tentSchema);

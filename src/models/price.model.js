// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const priceSchema = new Schema({
  tentId: { type: Schema.Types.ObjectId, ref: "tent", required: true },
  price: { type: Number, required: true },
  startDate: { type: Date, default: Date.now(), required: true },
  endDate: { type: Date, default: Date.now(), required: true },
  promotionApply: { type: String },
});

module.exports = mongoose.model("priceModel", priceSchema);

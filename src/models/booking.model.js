// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
  startDate: { type: Date, default: Date.now(), required: true },
  endDate: { type: Date, default: Date.now(), required: true },
  tentId: [{ type: Schema.Types.ObjectId, ref: "tent" }],
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  totalPrice: { type: Number },
  depositRate: { type: Number },
  depositStatus: { type: Boolean, default: false },
  paymentStatus: { type: Boolean, default: false },
  guestNumber: { type: Number },
  replyEmail: { type: Boolean, default: false },
});

module.exports = mongoose.model("bookingModel", BookingSchema);

const stringConnecting = process.env.ADMIN_MONGO_URI || "";

const mongoose = require("mongoose");

const connect = async (stringConnecting) => {
  try {
    await mongoose.connect(stringConnecting);
    console.log("Database connect");
  } catch (error) {
    console.log("Database connection fail");
    console.log(error.message);
  }
};

module.exports = { connect };

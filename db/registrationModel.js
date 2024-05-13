const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  eventID: Number,
  fullName: String,
  email: String,
  dob: String,
  hearFrom: String,
});

module.exports = mongoose.model("Registration", RegistrationSchema);

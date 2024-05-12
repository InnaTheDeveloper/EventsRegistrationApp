const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  event_date: String,
  organizer: String,
});

module.exports = mongoose.model("Event", EventSchema);

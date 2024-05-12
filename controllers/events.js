const Event = require("../db/eventModel");

const postEvent = async (req, res) => {
  const event = await Event.create(req.body);
  res.status(201).json({ event });
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json({ events });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const eventForm = (req, res) => {
  res.json({ id: req.params.id });
};

const postEventRegistration = (req, res) => {
  res.json(req.body);
};

const getEventParticipants = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  postEvent,
  getAllEvents,
  eventForm,
  postEventRegistration,
  getEventParticipants,
};

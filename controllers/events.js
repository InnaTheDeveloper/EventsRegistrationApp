const Event = require("../db/eventModel");
const Registration = require("../db/registrationModel");

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

const postEventRegistration = async (req, res) => {
  const registration = await Registration.create(req.body);
  res.status(201).json({ registration });
};

const getEventParticipants = async (req, res) => {
  try {
    const participants = await Registration.find({
      eventID: parseInt(req.params.id),
    });
    res.status(200).json({ participants });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  postEvent,
  getAllEvents,
  eventForm,
  postEventRegistration,
  getEventParticipants,
};

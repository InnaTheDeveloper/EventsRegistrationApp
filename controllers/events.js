const getAllEvents = (req, res) => {
  res.send("all events");
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
  getAllEvents,
  eventForm,
  postEventRegistration,
  getEventParticipants,
};

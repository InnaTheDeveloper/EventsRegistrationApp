const express = require("express");
const router = express.Router();
const {
  postEvent,
  getAllEvents,
  eventForm,
  postEventRegistration,
  getEventParticipants,
} = require("../controllers/events");
//routes
// app.get("/events") - get a list of events
// app.get("/events/:id/register") - get a registration form
// app.post("/events/:id/register") - post request to save registration data
// app.get("/events/:id/participants") - get a list of event participants
router.route("/").post(postEvent).get(getAllEvents);

router.route("/:id/register").get(eventForm).post(postEventRegistration);

router.route("/:id/participants").get(getEventParticipants);

module.exports = router;

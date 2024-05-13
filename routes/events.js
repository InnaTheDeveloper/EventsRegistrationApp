const express = require("express");
const router = express.Router();
const {
  postEvent,
  getAllEvents,
  postEventRegistration,
  getEventParticipants,
} = require("../controllers/events");

router.route("/").post(postEvent).get(getAllEvents);

router.route("/:id/register").post(postEventRegistration);

router.route("/:id/participants").get(getEventParticipants);

module.exports = router;

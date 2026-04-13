const Event = require("../models/events");

exports.createEvent = async (req, res) => {
  const event = await Event.create({
    ...req.body,
    organizer: req.user.id,
    availableSeats: req.body.totalSeats,
  });

  res.json(event);
};

exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

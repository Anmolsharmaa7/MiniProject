const Booking = require("../models/booking");
const Event = require("../models/events");
const QRCode = require("qrcode");

exports.bookTicket = async (req, res) => {
  const { eventId, tickets } = req.body;

  const event = await Event.findById(eventId);

  if (event.availableSeats < tickets)
    return res.json({ message: "Not enough seats" });

  event.availableSeats -= tickets;
  await event.save();

  const booking = await Booking.create({
    user: req.user.id,
    event: eventId,
    tickets,
    totalAmount: tickets * event.price,
  });

  const qr = await QRCode.toDataURL(booking._id.toString());
  booking.qrCode = qr;
  await booking.save();

  res.json(booking);
};

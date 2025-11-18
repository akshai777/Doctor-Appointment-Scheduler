const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  //doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;

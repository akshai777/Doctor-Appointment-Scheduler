const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    const { patientName, date, time } = req.body;
    const newAppointment = new Appointment({ patientName, date, time});
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};
exports.updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const { patientName, date, time, doctorId } = req.body;
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      { patientName, date, time, doctorId },
      { new: true }
    );
    res.status(200).json(updatedAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    await Appointment.findByIdAndDelete(id);
    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
};

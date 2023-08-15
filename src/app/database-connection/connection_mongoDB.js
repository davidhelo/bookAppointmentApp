const mongoose = require('mongoose');

mongoose.connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose schema
let userSchema = new mongoose.Schema({
  username: String
});

let appointmentSchema = new mongoose.Schema({
  username: String,
  serviceDescription: String,
  dateTime: Date,
  available: Boolean
});

let userModel = mongoose.model('userModel', userSchema);
let appointmentModel = mongoose.model('appointmentModel', appointmentSchema);

exports.userModel = userModel;
exports.appointmentModel = appointmentModel;
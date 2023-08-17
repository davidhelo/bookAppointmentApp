import { connect, Schema, models, model } from 'mongoose';

connect(process.env['MONGO_URI'], { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose schema
// let userSchema = new mongoose.Schema({
//   username: String
// });

let AppointmentSchema = new Schema({
  username: String,
  serviceDescription: String,
  dateTime: Date,
  available: Boolean
});

// let userModel = mongoose.model('userModel', userSchema);
// let AppointmentModel = model('appointmentModel', AppointmentSchema);

// exports.userModel = userModel;
// exports.AppointmentModel = AppointmentModel;
export const AppointmentModel = models.AppointmentModel || model('AppointmentModel', AppointmentSchema);
import { NextResponse } from 'next/server';
import { AppointmentModel } from '../../database-connection/connection_mongoDB';

  export async function POST(request) {
    const req = await request.json();

    const newAppointment = new AppointmentModel({
      username: req.username,
      serviceDescription: "Servicio",
      dateTime: new Date(req.dateTime),
      available: true
    });

    let status = 200;
    let message = "";

    await newAppointment.save()
    .then((dataAppointment) => {
      console.log("New appointment registered with data: ");
      console.log(dataAppointment);
      status = 200;
      message = "Registration successful"
    })
    .catch((errAppointment) => {
      console.log(`Error from mongo when saving new appointment, message: ${errAppointment.message}`);
      status = 500;
      message("Database error: " + errAppointment.message);
    });
    
    return NextResponse.json({message: message, body: req}, {status: status });
  }
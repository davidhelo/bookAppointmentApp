import { NextResponse } from 'next/server';
import { appointmentModel } from '@/app/database-connection/connection_mongoDB';

  export async function POST(request) {
    const req = await request.json();

    console.log("dateTime before model: ", req.dateTime);
    const newAppointment = new appointmentModel({
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
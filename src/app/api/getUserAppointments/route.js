import { NextResponse } from 'next/server';
import { AppointmentModel } from '../../database-connection/connection_mongoDB';

export async function GET(request) {
    const username = request.nextUrl.searchParams.get("username");

    let status = 200;
    let message = "";
    let appointments = [];


    await AppointmentModel.find({username: username})
    .then((dataAppointment) => {
        console.log("Appointments found: ");
        console.log(dataAppointment);
        appointments = dataAppointment.map((item) => {
            return {  
                serviceDescription: item.serviceDescription,
                dateTime: item.dateTime
            }
        });
        status = 200;
        message = "Fetching appointments data successful"
      })
      .catch((errDataAppointment) => {
        console.log(`Error from DB when retriving user appointments, message: ${errDataAppointment.message}`);
        status = 500;
        message("Database error: " + errDataAppointment.message);
      });

    return NextResponse.json({message: message, appointments}, {status: status});
}
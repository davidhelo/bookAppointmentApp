'use client'

import Link from "next/link";
import Layout from "../layout";

import '../../styles/global.css';
import utils from "../../styles/utils.module.css";

import { useSearchParams } from 'next/navigation';

const getUserAppointments = async (username) => {
    const res = await fetch('../api/getUserAppointments/?username=' + username)
    const appointments = await res.json()
    return appointments;
}

export default function UserAppointments() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');

    let userAppointmentsArray = [];
    getUserAppointments(username)
    .then((dataReceived) => {
        userAppointmentsArray = dataReceived;
        console.log(dataReceived.appointments);
    }, (err) => {
        console.log("Internal Error getting appointments: ", err);
    })


  return (
    <Layout>
      <div className="user-appointments-component" style={{textAlign: 'center'}}>
          <p> username: {username} </p>
          <Link href="/">Volver a Inicio</Link>
          {/* <p>appointments: {userAppointmentsArray}</p> */}
      </div>
    </Layout>
  );
}

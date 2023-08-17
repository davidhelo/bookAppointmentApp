'use client'

import Link from "next/link";
import Layout from "../layout";
import IndeterminateProgressBar from "@/components/IndeterminateProgressBar";
import { useState } from "react";

import styles from "@/styles/styles.module.css";
import '@/styles/global.css';

import { useSearchParams } from 'next/navigation';

const getUserAppointments = async (username, setAppointmentsState) => {
    const res = await fetch('../api/getUserAppointments/?username=' + username)
    const appointments = await res.json()
    setAppointmentsState({appointments: Object.values(appointments.appointments), username: username, userFound: appointments.appointments.length > 0 });
    return;
}

export default function UserAppointments() {
    const searchParams = useSearchParams();
    const username = searchParams.get('username');

    let [appointmentsState, setAppointmentsState] = useState({appointments: null, username: username, userFound: true});

    let userAppointmentsData = [];
    // <IndeterminateProgressBar />;

    if (appointmentsState.appointments === null) {
        getUserAppointments(appointmentsState.username, setAppointmentsState);
    } else {
            userAppointmentsData = appointmentsState.appointments.map((appointmentItem, index) => {
            let dateTime = new Date(appointmentItem.dateTime);
            return (
                <li id={"appointment" + String(index)} className={styles.upcomingAppointmentCard}>
                    {appointmentsState.appointments.length === 0 ? 
                        <p>No hay citas agendadas</p>
                        : <div className={styles.upcomingServiceCardContainer}>
                            <div>{appointmentItem.serviceDescription}</div>
                            <div>
                                {
                                " Dia: " 
                                + dateTime.toLocaleDateString("es-MX", {dateStyle: "full"}) + ", a las " + String(dateTime.getHours()) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " horas."
                                }
                            </div>
                        </div>
                    }
                </li>
            )
        });
    }            
        

  return (
    <Layout>
        <div className={styles.userAppointmentsComponent} style={{textAlign: 'center'}}>
            <h3> Usuario: {username} </h3>
            
            <Link href="/">Volver a Inicio</Link>
            <hr />
                <h3>{appointmentsState.userFound ? <p>Citas </p> : <p>Usuario no encontrado</p>} </h3>
                {appointmentsState.appointments === null ? <IndeterminateProgressBar /> : <></> }
                <div className={styles.upcomingAppointmentList}>
                    <ul>
                        {userAppointmentsData}
                    </ul>
                </div>
            <hr />
      </div>
    </Layout>
  );
}

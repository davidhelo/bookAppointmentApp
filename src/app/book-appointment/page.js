
import Link from "next/link";
import Head from "next/head";
import Layout from "../layout";
import AvailableDatesAndTimes from "./AvailableDatesAndTimes";
import Image from 'next/image';

import '../../styles/global.css';
import utils from "../../styles/utils.module.css";

export const metadata = {
  title: 'Agendar cita',
  description: 'Agendar una cita',
}

export default function BookAppointment() {
  return (
    <Layout>
      <div className="book-appointment-component" style={{textAlign: 'center'}}>
          <Image 
            src="/images/Cosmelh-logo.png"
            width={200}
            height={200}
            alt="logo"
            style={{margin: "auto"}}
          />
          <h1 className={utils.heading2Xl}>Agendar una cita</h1>
          <Link href="/">Volver a Inicio</Link>
          <h2>Servicio: limpieza Facial</h2>
          <AvailableDatesAndTimes />
      </div>
    </Layout>
  );
}
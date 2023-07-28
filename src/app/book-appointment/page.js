
import Link from "next/link";
import Head from "next/head";
import Layout from "../layout";
import AvailableDatesAndTimes from "./AvailableDatesAndTimes";
import Image from 'next/image'

import '../styles/global.css';
import utils from "../styles/utils.module.css";

export default function BookAppointment() {
  return (
    <Layout>
      <Head>
        <title>Book an appointment</title>
      </Head>
      <div className="book-appointment-component" style={{textAlign: 'center'}}>
          <Image 
            src="/images/Cosmelh-logo.png"
            width={200}
            height={200}
            alt="logo"
            style={{margin: "auto"}}
          />
          <h1 className={utils.heading2Xl}>Book an appointment</h1>
          <p><Link href="/">Go back</Link></p>
          <h2>Service 2</h2>
          <AvailableDatesAndTimes />
      </div>
    </Layout>
  );
}
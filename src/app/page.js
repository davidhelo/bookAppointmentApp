import '../styles/global.css';
import styles from '../styles/styles.module.css';
import "../styles/custom-light-theme.css";

import Link from "next/link";
import Layout from "./layout";
import Navbar from '../components/Navbar.js';

import ServiceCard from '@/components/ServiceCard';

import ServicesCardsArray from '@/components/ServicesCardsArray';
        
 
export const metadata = {
  title: 'Project Come',
  description: 'Cosme Project',
}

export default function Page() {
  return (
    <Layout>
      <Navbar  />
      <div id="home">
        <h1 id="mainTitle">COSMETOLOGÍA PROFESIONAL</h1>
        <h3>Cuidados de la piel para lucir increible.</h3>
        <p>Remoción de vello y cuidado de la piel facial y corporal.</p>
        <Link href="#services" className={styles.pButton} >Ver servicios</Link>
      </div>
      <hr></hr>
      <div id="services" >
        <h1 className='cursiveTitle'>Servicios </h1>
        <ServicesCardsArray />
      </div>
      <hr></hr>
      <div id="contact" >
         <h1 className='cursiveTitle'>Contáctanos</h1>
      </div>
    </Layout>
  );
}
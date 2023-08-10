import '../styles/global.css';
import styles from '../styles/styles.module.css';
import "../styles/custom-light-theme.css";

import Link from "next/link";
import Layout from "./layout";
import Navbar from '../components/Navbar.js';

import ServicesCardsArray from '@/components/ServicesCardsArray';
        
 
export const metadata = {
  title: 'Project Come',
  description: 'Cosme Project',
}

export default function Page() {
  return (
    <Layout>
      <Navbar />
      <div id="home">
        <h1 id="mainTitle">COSMETOLOGÍA PROFESIONAL</h1>
        <h3>Cuidados de la piel para lucir increible.</h3>
        <p>Remoción de vello y cuidado de la piel facial y corporal.</p>
        <Link href="#services" className={styles.pButton} >Ver servicios</Link>
      </div>
      <div id="services" >
        <h1 className='cursiveTitle'>Servicios </h1>
        <ServicesCardsArray />
      </div>
      <hr/>
      <section id="contact" >
         <h1 className='cursiveTitle'>Contáctanos</h1>
      <div class={styles.mainContainer}>
        <div class={styles.contactFormContainer}>
          <form action="#" class="contact-form">
            <div class={styles.contactFormField}>
              <label class={styles.contactFormLabel} for="name">Nombre</label>
              <input
                required
                placeholder="Escribe tu nombre"
                type="text"
                class={styles.contactFormInput}
                name="name"
                id="name"
              />
            </div>
            <div class={styles.contactFormField}>
              <label class={styles.contactFormLabel} for="email">Correo electronico</label>
              <input
                required
                placeholder="Escribe tu correo electronico"
                type="text"
                class={styles.contactFormInput}
                name="email"
                id="email"
              />
            </div>
            <div class={styles.contactFormField}>
              <label class={styles.contactFormLabel} for="message">Mensaje</label>
              <textarea
                required
                cols="30"
                rows="10"
                class={styles.contactFormInput}
                placeholder="Escribe tu duda..."
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" class={styles.contactButton}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
    </Layout>
  );
}
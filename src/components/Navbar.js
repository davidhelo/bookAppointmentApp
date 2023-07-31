'use client'

import { Menubar } from 'primereact/menubar';
import Layout from "../app/layout";

// CSS imports
//theme
import "../styles/custom-light-theme.css";
//core
import "primereact/resources/primereact.min.css"; 

//icons library from primeicons
import 'primeicons/primeicons.css';

export default function Navbar () {
    //navbar items
    const navbarItems = [
    {
        label: "Inicio",
        icon: "pi pi-home",
        url: "#"
    },
    {
        label: "Servicios",
        icon: "pi pi-info-circle",
        url: "#services"
    },
    {
        label: "Contactanos",
        icon: "pi pi-comment",
        url: "#contact"
    }
  ];

  const start = 
    <a href="/" style={{display: "flex", alignItems: "center"}}>
        <img alt="logo" src="/images/Cosmelh-logo-top.png" height="60" className="mr-2"></img>
        <img alt="logo" src="/images/Cosmelh-logo-bottom.png" height="40" className="mr-2"></img>
    </a>;

    return (
        <Layout>
            <Menubar model={navbarItems} start={start} />
        </Layout>
    );
}
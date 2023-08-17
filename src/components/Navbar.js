'use client'

import { Menubar } from 'primereact/menubar';
import Layout from "../app/layout";
import { useEffect } from 'react';

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
    <a href="/" id="logo">
        <img alt="logo" src="/images/Cosmelh-logo-top.png" id="logoImg1"  className="mr-2"></img>
        <img alt="logo" src="/images/Cosmelh-logo-bottom.png" id="logoImg2" className="mr-2"></img>
    </a>;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                document.getElementById("logoImg1").classList.add("logoImg1Shrinks");
            } else {
                document.getElementById("logoImg1").classList.remove("logoImg1Shrinks");
            }
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Layout>
            <Menubar model={navbarItems} start={start} />
        </Layout>
    );
}
'use client'

//theme
import "../styles/custom-light-theme.css";

//core
import "primereact/resources/primereact.min.css"; 

import React, { useState, useRef, use } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

import 'primeicons/primeicons.css';

export default function SelectDate({date, setDate}) {
    // calendar parameters
    addLocale('es', {
        firstDayOfWeek: 1,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
        };
    
    let today = new Date();
    today.setHours(0, 0);
    const month = today.getMonth();
    const year = today.getFullYear();
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = nextMonth === 0 ? year + 1 : year;
    let minDate = new Date();
    minDate = today;

    const maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);
    return (
        <div>
            <Calendar 
                value={date} 
                onChange={(e) => setDate(e.value)} 
                inline 
                minDate={minDate} 
                maxDate={maxDate} 
                locale="es"
            />
            <h3>Fecha: {date.toLocaleDateString("es-MX", options)} </h3>
        </div>
    );

};
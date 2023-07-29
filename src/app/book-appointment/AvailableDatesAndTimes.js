'use client'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { addLocale } from 'primereact/api';

import 'primeicons/primeicons.css';
import styles from "../styles/styles.module.css";

//function to populate buttons from date
function getAvailableTimes(dateSelected, updateDateTimeState) {
    
    let availableTimes = [
        {hour: 16, minute: 0}, 
        {hour: 17, minute: 0},
        {hour: 18, minute: 0},
        {hour: 19, minute: 0}
    ];
    
    let availableDateTimes = availableTimes.map((time) => new Date(dateSelected.getFullYear(), dateSelected.getMonth(), dateSelected.getDate(), time.hour, time.minute));

    let availableTimesButtons = availableDateTimes.map((time) => 
        <Button 
            label={String(time.getHours()) + ":" + time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2} )} 
            icon="pi pi-clock" 
            className={dateSelected.getTime() === time.getTime() ? styles.selectedTimeButton : styles.availableTimeButton} 
            id={"button" + String(time.getHours()) + ":" + time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2})} 
            onClick={() => updateDateTimeState(time)}
            raised small
        /> 
    );

    return (<div className={styles.buttonsContainer}>
        {availableTimesButtons}
    </div>);
}

export default function AvailableDatesAndTimes() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [dateTime, setDateTime] = useState(today);

    let minDate = new Date();
        minDate = today;

    let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

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
        day: "numeric",
        };

 return (
    <div className="card flex justify-content-center">
        <Calendar 
            value={dateTime} 
            onChange={(e) => setDateTime(e.value)} 
            inline 
            minDate={minDate} 
            maxDate={maxDate} 
            locale="es"
        />
        <h3>Fecha: {dateTime.toLocaleDateString("es-MX", options)} </h3>
        <h3>Selecciona la hora de tu cita: </h3>
        {getAvailableTimes(dateTime, setDateTime)}
        <Button 
            label={"Confirmar"} 
            icon="pi pi-calendar" 
            id="buttonConfirm"
            onClick={() => console.log("cita confirmada:", dateTime)}
            raised
        /> 
    </div>
 );

}
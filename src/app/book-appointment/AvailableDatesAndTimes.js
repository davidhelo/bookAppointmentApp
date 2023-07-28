'use client'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 

import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

//function to populate buttons from date
function getAvailableTimes(dateSelected) {
    let availableTimes = ["5:00 PM", "6:00 PM","7:00 PM","8:00 PM","9:00 PM"];

    let availableTimesButtons = availableTimes.map((time) => <Button label={time} icon="pi pi-clock" style={{margin: "0.5rem"}} id={"button" + time} /> );

    return (<div style={{maxWidth: "400px", margin: "auto"}}>
        {availableTimesButtons}
    </div>);
}

export default function AvailableDatesAndTimes() {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [date, setDate] = useState(today);

    let minDate = new Date();
        minDate = today;

    let maxDate = new Date();
        maxDate.setMonth(nextMonth);
        maxDate.setFullYear(nextYear);

 return (
    <div className="card flex justify-content-center">
        <Calendar value={date} onChange={(e) => setDate(e.value)} inline minDate={minDate} maxDate={maxDate} />
        <h3>Fecha: {date.toLocaleDateString()} </h3>
        <h3>Selecciona la hora de tu cita: </h3>
        {getAvailableTimes(date)}
    </div>
 );

}
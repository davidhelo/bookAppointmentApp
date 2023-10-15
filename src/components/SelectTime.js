'use client'

//theme
import "../styles/custom-light-theme.css";

//core
import "primereact/resources/primereact.min.css"; 

import React, { useState, useRef, use } from "react";
import { Button } from 'primereact/button';

import 'primeicons/primeicons.css';
import styles from "../styles/styles.module.css";

//function to populate time buttons from date
function getAvailableTimes(dateSelected, updatedateTimeState) {
    
    let availableTimes = [
        {hour: 15, minute: 0},
        {hour: 16, minute: 0}, 
        {hour: 17, minute: 0},
        {hour: 18, minute: 0},
        {hour: 19, minute: 0}
    ];
    
    let availabledateTimes = availableTimes.map((time) => new Date(dateSelected.getFullYear(), dateSelected.getMonth(), dateSelected.getDate(), time.hour, time.minute));

    let availableTimesButtons = availabledateTimes.map((time) => 
        <Button 
            label={String(time.getHours()) + ":" + time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2} )} 
            icon="pi pi-clock" 
            className={dateSelected.getTime() === time.getTime() ? styles.selectedTimeButton : styles.availableTimeButton} 
            id={"button" + String(time.getHours()) + ":" + time.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2})} 
            onClick={() => updatedateTimeState(time)}
            raised
        /> 
    );

    return (<div>
                {availableTimesButtons}
            </div>);
};

export default function SelectTime({date, setDate}) {
    
    return (
        <div>
            <h3>Fecha: {date.toLocaleDateString("es-MX", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
            )}
            </h3>
            <h3>Selecciona la hora de tu cita: </h3>
            <div className={styles.buttonsContainer}>
                {getAvailableTimes(date, setDate)}
            </div>
        </div>
    );
}
'use client'

//theme
import "../../styles/custom-light-theme.css";

//core
import "primereact/resources/primereact.min.css"; 

import React, { useState, useRef, use } from "react";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { addLocale } from 'primereact/api';

import 'primeicons/primeicons.css';
import styles from "../../styles/styles.module.css";

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

    return (<div className={styles.buttonsContainer}>
        {availableTimesButtons}
    </div>);
}

function sendAddAppointmentRequest (username, appointmentDateTime, showError, showSuccess) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, dateTime: appointmentDateTime })
    };
    fetch('../api/addAppointment', requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }
        console.log(data);
        showSuccess();
        window.location.href = "/userAppointments?username=" + username;
    })
    .catch(error => {
        console.error('There was an error!', error);
        showError("Error interno", "Lo sentimos se produjo un error interno. Por favor, intente mas tarde.");
    });
}

function validateConfirmationTime(username, currentdateTimeState, showError, showSuccess) {
    
    if (currentdateTimeState.getHours() === 0 && currentdateTimeState.getMinutes() === 0) {
        console.log("Seleccione un horario: ", currentdateTimeState);
        showError("Horario invalido", "Por favor seleccione un horario");
    } else if (username === "") {
        console.log("Ingrese nombre de usuario");
        showError("Falta nombre de usuario", "Por favor ingrese nombre de usuario");
    } else {
        sendAddAppointmentRequest(username, currentdateTimeState, showError, showSuccess);
    }

    return
}

export default function AvailableDatesAndTimes() {
    let today = new Date();
    today.setHours(0, 0);
    let month = today.getMonth();
    let year = today.getFullYear();
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;

    const [dateTime, setdateTime] = useState(today);
    const [usernameState, setusernameState] = useState("");

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
        day: "numeric"
        };
    
    const toast = useRef(null);

    const showError = (messageSummary, messageDetail) => {
        toast.current.show(
            {
                severity:'error', 
                summary: messageSummary, 
                detail:messageDetail, 
                life: 3000
            }
        );
    }

    const showSuccess = () => {
        toast.current.show(
            {
                severity:'success', 
                summary: 'Cita confirmada', 
                detail: usernameState + ', Su cita ha sido confirmada para el dia: ' + dateTime.toLocaleDateString("es-MX", {dateStyle: "full"}) + ", a las " + String(dateTime.getHours()) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " horas.", 
                life: 3000
            }
        );
    }

 return (
    <div className="card flex justify-content-center">
        <Toast ref={toast} />
        <Calendar 
            value={dateTime} 
            onChange={(e) => setdateTime(e.value)} 
            inline 
            minDate={minDate} 
            maxDate={maxDate} 
            locale="es"
        />
        <h3>Fecha: {dateTime.toLocaleDateString("es-MX", options)} </h3>
        <h3>Selecciona la hora de tu cita: </h3>
        {getAvailableTimes(dateTime, setdateTime)}
        <div className="book-appointment-name-field">
        <label for="username" className="book-appointment-label">Usuario:</label>
        <input 
            id="username" 
            name="username"
            className="book-appointment-input"
            placeholder="nombre de usuario" 
            type="text" 
            onChange={(e) => setusernameState(e.target.value)}
            required ></input>
        </div>
        <Button 
            label={"Confirmar"} 
            icon="pi pi-calendar" 
            id="buttonConfirm"
            onClick={() => validateConfirmationTime(usernameState, dateTime, showError, showSuccess)}
            className={styles.confirmButton}
            raised
        /> 
    </div>
 );

}
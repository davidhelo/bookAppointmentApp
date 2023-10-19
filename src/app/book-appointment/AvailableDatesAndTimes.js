'use client'

//theme
import "../../styles/custom-light-theme.css";

//core
import "primereact/resources/primereact.min.css"; 

import React, { useState, useRef, use } from "react";
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Steps } from "primereact/steps";

import 'primeicons/primeicons.css';
import styles from "../../styles/styles.module.css";
import SelectDate from "@/components/SelectDate";
import SelectTime from "@/components/SelectTime";
import { useEffect } from "react";

function sendAddAppointmentRequest (username, appointmentDateTime, showError, showSuccess) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, dateTime: appointmentDateTime, serviceDescription: "Servicio general" })
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
        setTimeout(() => {window.location.href = `/userAppointments?username=${username}&showConfirmMessage=true`}, 5000);
        
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
        document.querySelector('#buttonConfirm').disabled = true;
        sendAddAppointmentRequest(username, currentdateTimeState, showError, showSuccess);
    }

    return
}

export default function AvailableDatesAndTimes() {
    let today = new Date();
    today.setHours(0, 0);

    const [dateTime, setdateTime] = useState(today);
    const [usernameState, setusernameState] = useState("");
    const [stepsActiveIndex, setStepsActiveIndex] = useState(0);

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false; 
        } else {
            setStepsActiveIndex(stepsActiveIndex + 1);
        }
    }, [dateTime]);

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
                detail: usernameState + ', Su cita ha sido confirmada para el dia: ' + dateTime.toLocaleDateString("es-MX", {dateStyle: "full"}) + ", a las " + String(dateTime.getHours()) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " horas. En un momento seras redireccionado para ver todas tus proximas citas.", 
                life: 5000
            }
        );
    }

    const items = [
        {
            label: 'Fecha'
        },
        {
            label: 'Hora'
        },
        {
            label: 'Información'
        },
        {
            label: 'Confirmación'
        }
      ];

 return (
    <div className="card flex justify-content-center">
        <Toast ref={toast} />
        <div className="p-steps-container">
            <Steps 
                model={items}
                activeIndex={stepsActiveIndex} 
                onSelect={(e) => setStepsActiveIndex(e.index)} 
                readOnly={true} />
        </div>
        {stepsActiveIndex > 0 ? 
        <Button 
            label={"Volver"} 
            icon="pi pi-arrow-left" 
            id="buttonPreviousStep"
            onClick={() => setStepsActiveIndex(stepsActiveIndex-1)}
            className={styles.previousStepButton}
            raised
        /> : <></>}
        {stepsActiveIndex === 0 ? <SelectDate date={dateTime} setDate={setdateTime} /> : <></>}
        {stepsActiveIndex === 1 ? <SelectTime date={dateTime} setDate={setdateTime} /> : <></>}
        
        {stepsActiveIndex === 2 
        ? <div className="book-appointment-name-field animate-in">
        <label for="username" className="book-appointment-label">Correo electronico:</label>
        <input 
            id="username" 
            name="username"
            className="book-appointment-input"
            placeholder="Correo Electronico" 
            type="text" 
            onChange={(e) => setusernameState(e.target.value)}
            required ></input>
        {usernameState != "" ? 
        <Button 
                label={"Continuar"} 
                icon="pi pi-arrow-right" 
                id="buttonContinue"
                onClick={() => setStepsActiveIndex(stepsActiveIndex+1)}
                className={styles.confirmButton}
                raised
            /> : <></>}
        </div>
        : <></>}
        {stepsActiveIndex === 3 
        ? <div className="animate-in">
            <br/>
            <h3>RESUMEN DE LA CITA</h3>
            <br/>
            <h3>Fecha: {dateTime.toLocaleDateString("es-MX", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
            )}
            </h3>
            <h3>Hora: {String(dateTime.getHours()) + ":" + dateTime.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2}) + " horas"}</h3>
            <h3>Usuario: {usernameState}</h3>
            <Button 
                label={"Confirmar"} 
                icon="pi pi-calendar" 
                id="buttonConfirm"
                onClick={() => validateConfirmationTime(usernameState, dateTime, showError, showSuccess)}
                className={styles.confirmButton}
                raised
            />
        </div> :<></> }
    </div>
 );

}
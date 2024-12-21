import { output5Appointment } from "../module/Appointment.js"

export function AppointmentForm(event){
  
    event.preventDefault();
    const form = event.target;
    const firstNameInput = form[0];
    const lastNameInput = form [1];
    const phoneNumberInput= form[2];
    const dateTimeInput= form[3]
    const value1 = firstNameInput.value;
    const value2 = lastNameInput.value;
    const value3 = phoneNumberInput.value;
    const value4 = dateTimeInput.value;
    output5Appointment(`Hello ${value1 +" "+ value2 }.We have received your order, your conact has been saved as ${value3} and your appointment has been scheduled for ${value4} <br>`)
    }
    
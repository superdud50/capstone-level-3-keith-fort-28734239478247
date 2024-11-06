
function createColumn(contentString){
  const columnString = `<div class="col">${contentString} </div>`;
  return columnString;
  
  }
function createRow(columnsString){
  const rowString = `<div class="row">${columnsString} </div>`
  return rowString
  
}
function createContainer(rowString){
  const containerString =  `<div class = "row">${rowString}
    </div>`
  return containerString;
}

function myProcessForm(event){
  
event.preventDefault();
const form = event.target;
const firstNameInput = form[0];
const value = firstNameInput.value;
output(`Your infomation has been processed, your email is ${value}.<br>`)
}

function myAppointmentForm(event){
  
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
output(`Hello ${value1 +" "+ value2 }.We have received your order, your conact has been saved as ${value3} and your appointment has been scheduled for ${value4} <br>`)
}

function output(text){
  document.write(text)
}

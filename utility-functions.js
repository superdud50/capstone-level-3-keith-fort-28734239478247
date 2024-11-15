
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
output(`You have successfully joined our mailing list, your email is ${value}.<br>`)
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
function display(message) {
  document.write(message);
};

function greeting () {
  display("Hello and welcome to Sneakers R US. Let us know your thoughts, we are happy to help");
}
function delayedGreeting() {
  setTimeout(greeting, 5000);
}
function asynchronous() {
  setTimeout(greeting, 5000);
  display("Loading...");
}
function handleSubmit(event) {
  const inputs = event.target;
  event.preventDefault()
  const emailInput = inputs[0];
  const email = emailInput.value;
  display("Registering email for " + email + "...");
  const promise = new Promise(getServerResponse);
  promise.then(parseResponse);
}

function getServerResponse(resolve){
  setTimeout(activateResolve, 5000);
  function activateResolve(){
      const response = {
          message:"You have now been entered into our sweepstakes! Good Luck on the contest, winners will be contacted once the contest has closed "
      };
      const resolveValue = JSON.stringify(response);
      resolve(resolveValue);
  }
}

function parseResponse(resolveValue){
  const response = JSON.parse(resolveValue);
  const message = response.message;
  display(message);
}

function display(message) {
  document.write(message)
}

function output(message) {
 window.outputTag.innerHTML += message;
}

function output2(message) {
  window.outputTag2.innerHTML += message;
 }
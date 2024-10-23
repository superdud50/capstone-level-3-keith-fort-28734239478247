
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
  debugger
event.preventDefault();
const form = event.target;
const firstNameInput = form[0];
const value = firstNameInput.value;
output(`Your infomation has been processed, your email is ${value}.<br>`);
}
function output(text){
  document.write(text)
}
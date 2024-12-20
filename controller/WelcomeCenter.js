export function welcomeCenter(){

}
window.welcomeCenter = welcomeCenter;

export function createColumn(contentString){
  const columnString = `<div class="col">${contentString} </div>`;
  return columnString;
  
  }
export function createRow(columnsString){
  const rowString = `<div class="row">${columnsString} </div>`
  return rowString
  
}
export function createContainer(rowString){
  const containerString =  `<div class = "row">${rowString}
    </div>`
  return containerString;
}

const myContent = "Give us a shout out on social media!";
        let myColumnString = createColumn(myContent);
        myColumnString += createColumn ("We want to feature you on ours!")
        
        const myRowString = createRow(myColumnString);

        const myContainerString = createContainer(myRowString);
        mainTag.innerHTML += myContainerString;
    
        {
        
        const myContents = ["Twitter: @sneakersrus", "Facebook: /sneakersrus", "Instagram: @sneakersrus"];
      let myColumnString = createColumn(myContents [0]);
      myColumnString += createColumn (myContents [1])
      myColumnString += createColumn (myContents [2])
      

      const myRowString = createRow(myColumnString);

      const myContainerString = createContainer(myRowString);
      mainTag.innerHTML += myContainerString;
    
        }
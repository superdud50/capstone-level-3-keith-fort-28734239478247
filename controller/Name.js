import { display2Name } from "../module/NameOutput.js"

export function Name(){
    userName = prompt("Enter your name. ")
 return "Welcome to Sneakers R Us " + userName;
    
  }
   const name = Name();
display2Name(Name);
display2Name("<br>")
display2Name("The data type is ");
display2Name(typeof name);
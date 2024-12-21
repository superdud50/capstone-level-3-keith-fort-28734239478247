import { output4mailingList } from "../module/MailingList.js";

 export function MailingList(event){
  
    event.preventDefault();
    const form = event.target;
    const firstNameInput = form[0];
    const value = firstNameInput.value;
    output4mailingList(`You have successfully joined our mailing list, your email is ${value}.<br>`)
    }
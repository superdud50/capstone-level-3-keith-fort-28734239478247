import { SweepstakesParseRepsonse } from "./SweepstakesParseResponse.js"
import { SweepstakesServerResponse } from "./SweepstakesServerRespsone.js"
import { SweepstakesDisplay } from "./SweepstakesDisplay.js";

export function SweepstakesHandleSubmit (event = new Event) {
    const inputs = event.target;
    event.preventDefault()
    const emailInput = inputs[0];
    const email = emailInput.value;
    SweepstakesDisplay("Registering email for " + email + "...");
    const promise = new Promise(SweepstakesServerResponse);
    promise.then(SweepstakesParseRepsonse);
  }
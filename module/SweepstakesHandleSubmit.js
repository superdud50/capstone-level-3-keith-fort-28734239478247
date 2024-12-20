import { SweepstakesParseRepsonse } from "./SweepstakesParseResponse"
import { SweepstakesServerResponse } from "./SweepstakesServerRespsone"

export function SweepstakesHandleSubmit (event = new Event) {
    const inputs = event.target;
    event.preventDefault()
    const emailInput = inputs[0];
    const email = emailInput.value;
    display("Registering email for " + email + "...");
    const promise = new Promise(SweepstakesServerResponse);
    promise.then(SweepstakesParseRepsonse);
  }
import { SweepstakesDisplay } from "./SweepstakesDisplay.js";

export function SweepstakesParseRepsonse(resolveValue){
    const response = JSON.parse(resolveValue);
    const message = response.message;
    SweepstakesDisplay(message);
  }
  
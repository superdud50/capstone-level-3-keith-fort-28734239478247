export function SweepstakesParseRepsonse(resolveValue){
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(message);
  }
  
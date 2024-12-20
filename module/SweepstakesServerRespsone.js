 export function SweepstakesServerResponse(resolve){
    setTimeout(activateResolve, 5000);
    function activateResolve(){
        const response = {
            message:"You have now been entered into our sweepstakes! Good Luck on the contest, winners will be contacted once the contest has closed "
        };
        const resolveValue = JSON.stringify(response);
        resolve(resolveValue);
    }
  }
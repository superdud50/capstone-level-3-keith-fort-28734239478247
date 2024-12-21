import { TriviaViewResponse } from "./TrivaViewResponse.js"
 
export function TriviaParseResponse(resolveValue){
   
    const promise = resolveValue.text();
    promise.then(TriviaViewResponse);
}
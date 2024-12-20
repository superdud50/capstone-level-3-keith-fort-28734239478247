import { TriviaViewResponse } from "./TrivaViewResponse.js"
import { TriviaHandleClick } from "./TrivaHandleClick.js"
 
export function TriviaParseResponse(resolveValue){
    // The resolve value will be fetch object
    //The text method extracts the stringified object
    const promise = resolveValue.text();
    promise.then(TriviaViewResponse);
}
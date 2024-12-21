import { TriviaParseResponse } from "./TriviaParseResponse.js";


export function TriviaHandleClick(event){
    
    const promise = fetch("https://opentdb.com/api.php?amount=10&type=multiple"); 
    promise.then(TriviaParseResponse)
}
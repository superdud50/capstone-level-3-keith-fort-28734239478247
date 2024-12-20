import { output2Trivia } from "../util/Trivia.js";
import { TriviaParseResponse } from "./TriviaParseResponse.js";

export function TriviaViewResponse(resolveValue){
    debugger
    //the resolve value will be a stringified object
    // the parse method generates an object from the string
    const response = JSON.parse(resolveValue);
    const results =  response.results;
    const item =  results[0];
    const question = item.question;
    const answer = item.correct_answer;
    const incorrect = item.incorrect_answers;

    const trivia = `<div>${question}</div>
            <ol type="a">
              <li>${incorrect[0]}</li>
              <li>${incorrect[1]}</li>
              <li>${incorrect[2]}</li>
              <li>${answer}</li>
              
            </ol>`;
            output2Trivia(trivia);

}
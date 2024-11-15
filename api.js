function handleClick(event){
    debugger
    const promise = fetch("https://opentdb.com/api.php?amount=10&type=multiple"); 
    promise.then(parseResponse)
}
function parseResponse(resolveValue){
    // The resolve value will be fetch object
    //The text method extracts the stringified object
    const promise = resolveValue.text();
    promise.then(viewResponse);
}


function viewResponse(resolveValue){
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
            output2(trivia);

}

function TriviaHandleClick(event){
    debugger
    const promise = fetch("https://opentdb.com/api.php?amount=10&type=multiple"); 
    promise.then(parseResponse)
}
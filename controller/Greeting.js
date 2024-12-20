
export function greeting () {
    display("Hello and welcome to Sneakers R US. Let us know your thoughts, we are happy to help");
  }
  export function delayedGreeting() {
    setTimeout(greeting, 5000);
  }
  export function asynchronous() {
    setTimeout(greeting, 5000);
    display("Loading...");
  }
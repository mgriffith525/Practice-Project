function greeter (question = "What is your name?") {
  const answer = prompt(question);

  if (answer === "") {
    greeter(); // recursion
  }
  return answer;
}

// TODO: Resolve issue where h1 is not updated if user gives blank answer
document.querySelector('h1').textContent = greeter();



// const answer = greeter();
// const textContent= document.querySelector('h1').textContent = answer;
// console.log(textContent);


// const answer = greeter("Why is this class the  worst?");
// console.log(answer);

// const textContent= document.querySelector('h1').textContent = "Meghan";

//const msg = prompt("What is your name?");
//console.log(msg);

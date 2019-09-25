function greeter(question = "What is your name?") {
  let answer = prompt(question);

  if (answer === "") {
    return greeter(); // recursion
  }
  return answer;
}

document.querySelector('#root').innerHTML = `<p>${greeter()}</p>`



// const answer = greeter();
// const textContent= document.querySelector('h1').textContent = answer;
// console.log(textContent);


// const answer = greeter("Why is this class the  worst?");
// console.log(answer);

// const textContent= document.querySelector('h1').textContent = "Meghan";

//const msg = prompt("What is your name?");
//console.log(msg);

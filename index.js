import { Header, Nav, Main, Footer } from "./components";
import { linkSync } from "fs";

const state = {
  home: {
    heading: 'Home Page'
  },
  about: {
    heading: 'About Page'
  }
}

/*import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";

console.log(Header);
console.log(Nav);
console.log(Main);
console.log(Footer);*/

/* Currently the #root div is empty
/* We want to grab that #root div
/* We want to assign the markup that is contained in the component to the innerHTML
*/

function render(st = state.Home) {
document.querySelector("#root").innerHTML = `
  ${Header(st.heading)}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;
}

render();

const navLinks = document.querySelectorAll('nav a');

for(let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
  console.log('I am clicked');
  })
}



// aboutLink.addEventListener('click', function(event) {
  // event.preventDefault();
  // render(state[event.target.textContent]);
// })



import { Header, Nav, Main, Footer } from "./components";
import { Home, About, Contact, Gallery, Blog, Links } from "./store";

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

function render (st = Home) {
  console.log(`render piece of state with heading ${st.heading}`);
    document.querySelector("#root").innerHTML = `
      ${Header(st.heading)}
      ${Nav(st)}
      ${Main()}
      ${Footer()}
`;
}

render();

const navLinks = document.querySelectorAll('nav a, footer a');

for(let i = 0; i < navLinks.length; i += 1) {
  navLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target.textContent);
    render(event.target.textContent);
  })
}




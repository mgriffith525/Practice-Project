import { Header, Nav, Main, Footer } from "./components";


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


document.querySelector("#root").innerHTML = `
  ${Header()}
  ${Nav()}
  ${Main()}
  ${Footer()}
`;


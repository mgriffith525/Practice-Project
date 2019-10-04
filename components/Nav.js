function linksBuilder(links) {
  let linksHTML = "";
  console.log(links);
  for(let i = 0; i < links.length; i += 1) {
    linksHTML += `<li><a href="./${links[i]}">${links[i]}</a></li>`;
  }
  return linksHTML;
}
export default function(st) {
  return `<nav>
        <span class="fas fa-hamburger is-hidden--desktop"></span>
        <ul class="is-hidden--mobile is-hidden--tablet is-shown--desktop">
          ${linksBuilder(st.links)}
        </ul>
      </nav>
      `;
}

/*
<li><a href="./">Home</a></li>
          <li><a href="./about/">About</a></li>
          <li><a href="./contact/">Contact</a></li>
          <li><a href="./gallery/">Gallery</a></li>
          <li><a href="./blog/">Blog</a></li>
*/

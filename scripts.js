const hamburger = document.querySelector(".fa-hamburger");
const hiddenUL = document.querySelector("ul");

hamburger.addEventListener('click', function() {
//  hiddenUL.classList.remove("is-hidden--mobile");
hiddenUL.classList.toggle("is-hidden--mobile");
})

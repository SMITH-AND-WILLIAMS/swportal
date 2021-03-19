const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const bg = $(".background");
const header = $("header");
const noise = document.createElement("div");

function turbulences(e) {
    bg.classList.add(".noise")
    bg.style.setProperty('--x', e.x-120 + "px");
    bg.style.setProperty('--y', e.y-120 + "px");
}
noise.classList.add("noise");
bg.appendChild(noise);
bg.addEventListener("pointermove", turbulences);
window.addEventListener("scroll",paneBg);
function paneBg(e){
    header.style.setProperty('--rot',window.pageYOffset/10+"deg");
}

window.addEventListener('load', main);

function main() {
}
/* ALL OF THE FUNCTIONS BELOW ARE USED TO SCROLL TO THEIR RESPECTIVE PART OF THE SCREEN.
THEY GET THE ELEMENT AND THEN SCROLL SAID ELEMENT INTO THE VIEWPORT. */

function vaderRedirect() {
    window.open("https://projektvader.netlify.app/", "_blank")
}
function inetRedirect() {
    window.open("https://www.inet.se/", "_blank")
}
function discordRedirect() {
    window.open("https://discord.com/", "_blank")
}
function boxesRedirect() {
    window.open("https://github.com/miMeiner/LAB1", "_blank")
}
function nftHeavenRedirect() {
    window.open("https://nftheaven.netlify.app/", "_blank")
}
function spotifyRedirect() {
    window.open("https://www.spotify.com/se/", "_blank")
}

function skillScroll() {
    let element = document.getElementById('skillsets');
    element.scrollIntoView({ behavior: "smooth" });
}

function projectScroll() {
    let element = document.getElementById('projects');
    element.scrollIntoView({ behavior: "smooth" });
}

function aboutScroll() {
    let element = document.getElementById('about-me');
    element.scrollIntoView({ behavior: "smooth" });
}

function contactScroll() {
    let element = document.getElementById('contact');
    element.scrollIntoView({ behavior: "smooth" });
}

function topScroll() {
    let element = document.getElementById('front-page');
    element.scrollIntoView({ behavior: "smooth" });
}
/* EVERYTHING BELOW THIS LINE IS PART OF THE AOS LIBRARY
IMPORTED FROM https://github.com/michalsnik/aos
------------------------------------------------------ */
AOS.init();
AOS.init({
  disable: false, 
  startEvent: 'DOMContentLoaded', 
  initClassName: 'aos-init', 
  animatedClassName: 'aos-animate',
  useClassNames: false, 
  disableMutationObserver: false, 
  debounceDelay: 50,
  throttleDelay: 99, 
  
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',

});

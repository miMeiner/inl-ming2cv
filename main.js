window.addEventListener('load', main);

function main() {
}
/* ALL OF THE FUNCTIONS BELOW ARE USED TO SCROLL TO THEIR RESPECTIVE PART OF THE SCREEN.
HEY GET THE ELEMENT AND THEN SCROLL SAID ELEMENT INTO THE VIEWPORT. */
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
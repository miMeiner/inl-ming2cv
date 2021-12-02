window.addEventListener('load', main);

function main() {
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
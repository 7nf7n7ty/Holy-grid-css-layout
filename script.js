function showNavBar(){
const outerGrid = document.querySelector(".whole-content");
outerGrid.classList.toggle("whole-content-expanded");
 
const nav = document.querySelector("nav");
nav.classList.toggle("hide-nav");
}
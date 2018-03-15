
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


let innerNav =  document.querySelector('.nav-inner');
let hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener('click', function(){
	innerNav.classList.toggle('nav-active')

})
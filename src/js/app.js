
(() => {
	console.log("Hello World from app.js, transpiled and concatenated!");
})();


function mobileNav(){
	let mobileNavXOut = document.querySelector('.x-out');
	let mobileNavContainer = document.querySelector('.mobile-nav');
	let hamburgerButton = document.querySelector('.hamburger');

	mobileNavXOut.addEventListener('click', function(){
		console.log('x-out');
		TweenMax.to(mobileNavContainer, .8 , {
			left: '-100%'
		})
		hamburgerButton.classList.remove('hide');
	})

	hamburgerButton.addEventListener('click', function(){
		console.log('x-out');
		TweenMax.to(mobileNavContainer, .8 , {
			left: '0%'
		})

		hamburgerButton.classList.add('hide');
	})
}






mobileNav();
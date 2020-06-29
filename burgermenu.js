const navSlide = ()=>{
	const hamburger = document.querySelector('.hamburger');
	const nav = document.querySelector('.menu-container');

	hamburger.addEventListener('click',()=>{
		nav.classList.toggle('burger-active')
	});
}

navSlide();
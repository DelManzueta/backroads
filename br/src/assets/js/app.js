// select date span
const date = (document.getElementById('date').innerHTML =
	new Date().getFullYear());

// select button and links
const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
// add event listener
navBtn.addEventListener('click', () => {
	links.classList.toggle('show-links');
});

// ********** smooth scroll ************
// select links

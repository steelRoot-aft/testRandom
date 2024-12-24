const cardBlock = document.querySelector('.random__cards');
const cards = document.querySelectorAll('.random__card');
cardBlock.style.left = -0.0001 + 'px';
function start () {
	let random = Math.floor(Math.random() * 21);
	cardBlock.style.left = -random * 100 + 'px';
}
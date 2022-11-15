const board = document.querySelector('#board');
const colors = ['#A8BA82', '#C9B695', '#F5D170', '#C2D439', '#968E5D', '#A8BA82', '#D1CCA1'];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', setColor);

	square.addEventListener('mouseleave', removeColor);

	board.append(square);
}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

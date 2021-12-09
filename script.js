function setGrid(size = 16) {
	const container = document.querySelector('.container');
	if (container.innerHTML) {
		container.innerHTML = '';
	}
	for (let rows = 0; rows < size; rows++) {
		const row = document.createElement('div');
		row.classList.add('row');
		for (let item = 0; item < size; item++) {
			const box = document.createElement('div');
			box.classList.add('pixel');
			row.append(box);
		}
		container.append(row);
	}
	setMouseEffect();
}

function setMouseEffect(state = 'black', statesArr = ['black'] ) {
	const pixels = document.querySelectorAll('.pixel');
	const index = statesArr.indexOf(state);

	pixels.forEach(pixel => {
		pixel.addEventListener('mouseenter', () => {
			pixel.style.backgroundColor = 'gold';
		})
		pixel.addEventListener('mouseout', () => {
			const colorLeft = ['black', getRandomColor(), 'white'];
			pixel.style.backgroundColor = colorLeft[index];		
		})
	})
}

function getRandomColor() {
	const base16 = "0123456789ABCDEF";
	let hex = '';
	for (i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * 16);
		hex += base16[index]
	}
	return '#' + hex;
}

// start up call
setGrid();

// events for size slider and reset button
const size = document.querySelector('#size');
const sizeOutput = document.querySelector('#sizeOutput');
const reset = document.querySelector('#reset');

size.addEventListener('input', (e) => {
    sizeOutput.value = e.target.value;
    setGrid(e.target.value);
})
sizeOutput.value = size.value;

reset.addEventListener('click', () => {
    setGrid(size.value)
})

// event for different color modes
const colorModes = ['black', 'rainbow', 'erase'];
colorModes.forEach(x => {
	const state = document.querySelector('#' + x);
	state.addEventListener('click', () => {
		setMouseEffect(x, colorModes)
	})
})
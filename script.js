function setGrid(size) {
	const container = document.querySelector('.container');
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

function setMouseEffect() {
	const pixels = document.querySelectorAll('.pixel')
	pixels.forEach(pixel => {
		pixel.addEventListener('mouseenter', () => {
			pixel.style.backgroundColor = "gray";
		})
		pixel.addEventListener('mouseout', () => {
			pixel.style.backgroundColor = "black";
		})
	})
}

function resetGrid(size) {
    const container = document.querySelector('.container');
    container.innerHTML = '';
    setGrid(size);
    setMouseEffect();
}

setGrid(16);


const size = document.querySelector('#size');
const sizeOutput = document.querySelector('#sizeOutput');
const reset = document.querySelector('#reset');

size.addEventListener('input', (e) => {
    resetGrid(e.target.value);
    sizeOutput.value = e.target.value;
})
sizeOutput.value = size.value;

reset.addEventListener('click', () => {
    resetGrid(size.value)
})

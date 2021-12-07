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

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
  const container = document.querySelector('.container');
  container.innerHTML = '';
  setGrid(16);
  setMouseEffect();
})

setGrid(16);
const gallery_images = document.querySelectorAll('.gallery > img');

console.log(gallery_images);

gallery_images.forEach((image) => {
	image.addEventListener('click', () => {
		const container = document.createElement('div');

		container.classList.add('gallery-dialog');

		const img = document.createElement('img');
		img.src = image.src;

		container.appendChild(img);

		container.addEventListener('click', () => {
			container.remove();
		});

		document.body.appendChild(container);
	});
});
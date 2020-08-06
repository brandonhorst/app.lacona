

const updateLax = () => {
	lax.update(window.scrollY)
	window.requestAnimationFrame(updateLax)
}

window.onload = function() {
	lax.setup()
	window.requestAnimationFrame(updateLax)
};

window.addEventListener("resize", function() {
	lax.updateElements()
});

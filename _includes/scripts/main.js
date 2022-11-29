const onDOMContentLoaded = () => {
	nav();
	industry();
	testimonials();
	slideshow();
};

document.readyState !== "loading"
	? onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);

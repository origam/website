const onDOMContentLoaded = () => {
	nav();
	industry();
	testimonials();
};

document.readyState !== "loading"
	? onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);

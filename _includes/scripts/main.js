const onDOMContentLoaded = () => {
	nav();
	industry();
};

document.readyState !== "loading"
	? onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);

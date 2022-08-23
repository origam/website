const onDOMContentLoaded = () => {
	nav();
};

document.readyState !== "loading"
	? onDOMContentLoaded.call()
	: document.addEventListener("DOMContentLoaded", onDOMContentLoaded, false);

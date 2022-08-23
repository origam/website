const nav = () => {
	var $nav = document.querySelector(".l-header");
	var $html = document.querySelector("html");
	const $toggleBtn = document.querySelector(".menu-toggle");

	function init() {
		$toggleBtn.addEventListener("click", function () {
			$html.classList.toggle("overflow-hidden");
			$nav.classList.toggle("menu-visible");
		});
	}

	init();
};

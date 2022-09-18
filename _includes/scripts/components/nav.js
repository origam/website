const nav = () => {
	var $nav = document.querySelector(".l-header");
	var $html = document.querySelector("html");
	const $toggleBtn = document.querySelector(".menu-toggle");

	function stickyNav() {
		window.addEventListener("scroll", function () {
			window.lastScrollTime = new Date().getTime();

			if (
				window.lastScrollTime &&
				new Date().getTime() >= window.lastScrollTime + 500
			)
				return;

			if (this.window.scrollY > 0) {
				$nav.classList.add("scrolling");
			} else {
				$nav.classList.remove("scrolling");
			}
		});
	}

	function init() {
		$toggleBtn.addEventListener("click", function () {
			$html.classList.toggle("overflow-hidden");
			$nav.classList.toggle("menu-visible");
		});

		stickyNav();
	}

	init();
};
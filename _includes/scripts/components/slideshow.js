const slideshow = () => {
	var $slideshow = document.querySelector(".samples .slideshow");

	if ($slideshow) {
		var $buttons = $slideshow.querySelectorAll(".btn-row a");
		var $slides = $slideshow.querySelectorAll(".images img");
		var timeoutHandle = "";
	}

	function clearSelected() {
		$buttons.forEach(($btn) => {
			$btn.classList.remove("active");
		});

		$slides.forEach(($slide) => {
			$slide.classList.remove("active");
		});
	}

	function timeout() {
		timeoutHandle = window.setTimeout(function () {
			rotate();
			timeout();
		}, 5000);
	}

	function rotate() {
		var $current = $slideshow.querySelector(".images .active");
		var $i = Array.prototype.indexOf.call($slides, $current);

		if ($i < $slides.length - 1) {
			$slides[$i].classList.remove("active");
			$slides[$i + 1].classList.add("active");

			$buttons[$i].classList.remove("active");
			$buttons[$i + 1].classList.add("active");
		} else {
			$slides[$i].classList.remove("active");
			$slides[0].classList.add("active");

			$buttons[$i].classList.remove("active");
			$buttons[0].classList.add("active");
		}
	}

	function init() {
		$buttons.forEach(($btn, $i) => {
			$btn.addEventListener("click", function ($e) {
				$e.preventDefault();

				// Clear selected
				clearSelected();

				// Set selected
				$btn.classList.toggle("active");
				$slides[$i].classList.toggle("active");

				// Reset timer
				window.clearTimeout(timeoutHandle);
				timeout();
			});
		});

		timeout();
	}

	if ($slideshow) {
		init();
	}
};
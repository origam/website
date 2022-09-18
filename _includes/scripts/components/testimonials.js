const testimonials = () => {
	var $testimonials = document.querySelector(".used .image-container");

	if ($testimonials) {
		var $logos = $testimonials.querySelectorAll(".logos a");
		var $images = $testimonials.querySelectorAll(".images .image");
	}

	function clearSelected() {
		$logos.forEach(($logo) => {
			$logo.classList.remove("active");
		});

		$images.forEach(($image) => {
			$image.classList.remove("active");
		});
	}

	function init() {
		$logos.forEach(($logo, $i) => {
			$logo.addEventListener("click", function ($e) {
				$e.preventDefault();

				// Clear selected
				clearSelected();

				// Set selected
				$logo.classList.toggle("active");
				$images[$i].classList.toggle("active");
			});
		});
	}

	if ($testimonials) {
		init();
	}
};
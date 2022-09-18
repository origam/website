const industry = () => {
	var $industry = document.querySelector(".industry .image-holder");

	if ($industry) {
		var $buttons = $industry.querySelectorAll(".links ul li");
		var $images = $industry.querySelectorAll(".images ul li");
	}

	function clearSelected() {
		$buttons.forEach(($button) => {
			$button.classList.remove("selected");
		});

		$images.forEach(($image) => {
			$image.classList.remove("selected");
		});
	}

	function init() {
		$buttons.forEach(($btn, $i) => {
			$btn.addEventListener("click", function ($e) {
				$e.preventDefault();

				if (window.innerWidth <= 928) {
					$industry
						.querySelector(".images")
						.scrollIntoView({ block: "start", behavior: "smooth" });
				}

				// Clear selected
				clearSelected();

				// Set selected
				$btn.classList.toggle("selected");
				$images[$i].classList.toggle("selected");
			});
		});
	}

	if ($industry) {
		init();
	}
};

const industry = () => {
	var $industry = document.querySelector(".industry .image-holder");
	var $buttons = $industry.querySelectorAll(".links ul li");
	var $images = $industry.querySelectorAll(".images ul li");

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

				// Clear selected
				clearSelected();

				// Set selected
				$btn.classList.toggle("selected");
				$images[$i].classList.toggle("selected");
			});
		});
	}

	init();
};
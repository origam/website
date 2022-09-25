const industry = () => {
	var $industry = document.querySelector(".industry .image-holder");

	if ($industry) {
		var $buttons = $industry.querySelectorAll(".links ul li");
	}

	function clearSelected() {
		$buttons.forEach(($button) => {
			$button.classList.remove("selected");
		});
	}

	function init() {
		$buttons.forEach(($btn, $i) => {
			$btn.addEventListener("click", function ($e) {
				if (window.innerWidth > 928) {
					$e.preventDefault();
				}

				// Clear selected
				clearSelected();

				// Set selected
				$btn.classList.toggle("selected");
			});
		});
	}

	if ($industry) {
		init();
	}
};

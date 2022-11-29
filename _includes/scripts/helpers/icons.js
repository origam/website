const icons = {};
const icon = (name) => {
	if (icons.hasOwnProperty(name)) {
		return icons[name].outerHTML;
	} else {
		const xhr = new XMLHttpRequest();
		xhr.addEventListener('load', e => {
			const parser = new DOMParser();
			icons[name] = parser.parseFromString(e.target.responseText, 'image/svg+xml').lastChild;
			document.querySelectorAll('[data-icon="'+ name +'"]').forEach($i => {
				$i.parentNode.insertBefore(icons[name].cloneNode(true), $i);
				$i.remove();
			});
		});
		xhr.open('GET', __assetsPath +'/img/icons/'+ name +'.svg');
		xhr.send();
		return '<i data-icon="'+ name +'" hidden></i>';
	}
};

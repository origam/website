const __i18n = {
	price: (price) => {
		return '<span aria-label="'+ price +'">'+ price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') +' <abbr title="Korun českých" style="text-decoration:none">Kč</abbr></span>';
	},
	lHeader: {
		overlayToggleLabel: 'Hlavní nabídka',
		overlayToggleCollapse: 'Zavřít hlavní nabídku'
	},
	faq: {
		showAll: 'Zobrazit všechny otázky'
	},
	features: {
		stopRotation: 'zastavit rotaci obrázků',
		startRotation: 'spustit rotaci obrázků'
	},
	aboutReviews: {
		prev: 'Posunout seznam zpět',
		next: 'Posunout seznam dále'
	},
	partners: {
		stopRotation: 'zastavit rotaci partnerů',
		startRotation: 'spustit rotaci partnerů'
	},
	contact: {
		officesSwitchLabel: 'lokality'
	}
};

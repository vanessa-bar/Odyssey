Odyssey.class.PageWrapper = class {
	constructor(id) {
		this._div = document.querySelector(id);
		this._pages = [];
		this._currentPage = null;

		this._div.addEventListener('click', (e) => {
			if (e.target.closest('.pageContent')) return;
			this.hide();
		});
	}

	getDiv() {
		return this._div;
	}

	show() {
		this._div.classList.remove('hidden');
	}

	showPage(stepNumber) {
		if (this._currentPage) this.removePage();
		else this.show();

		if (!this._pages[stepNumber]) {
			this._pages[stepNumber] = new Odyssey.class.Page(stepNumber, this);
		}
		this._pages[stepNumber].show();
		this._currentPage = this._pages[stepNumber];
	}

	removePage(hideWrapper = false) {
		this._currentPage.hide();
		this._currentPage = null;
		if (hideWrapper) this.hide();
	}

	hide() {
		this.removePage();
		this._div.classList.add('hidden');
	}
}
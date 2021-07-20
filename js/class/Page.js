Odyssey.class.Page = class {
	constructor(stepNumber, wrapper) {
		this._wrapper = wrapper;

		this._stepNumber = stepNumber;

		const div = document.createElement('div');
		div.classList.add('pageContent');

            let html = `<button class="btn exit">X</button>`;
            html += `<div class="navBtnWrapper">`;
		if (stepNumber > 0) {
			html += `<button class="btn prevPage"><</button>`;
		}
		if (stepNumber < Odyssey.totalSteps - 1) {
			html += `<button class="btn nextPage">></button>`;
		}
            html += `</div>`;
            html += `<div class="pageHeader"><p>- Étape ${stepNumber + 1} -</p><h2>${Odyssey.steps[stepNumber].name}</h2></div>`;
            div.innerHTML = html;
		this._div = div;
	}

	show() {
		this._wrapper.getDiv().appendChild(this._div);
		if (this._stepNumber > 0)
			this._div.querySelector('.prevPage').addEventListener('click', () => this._wrapper.showPage(this._stepNumber - 1));
      	if (this._stepNumber < Odyssey.totalSteps - 1) 
      		this._div.querySelector('.nextPage').addEventListener('click', () => this._wrapper.showPage(this._stepNumber + 1));
            this._div.querySelector('.exit').addEventListener('click', () => this._wrapper.hide());
	}

	hide() {
		this._div.remove();
	}

	getDiv() {
		return this._div;
	}
};
Odyssey.class.Page = class {
	constructor(stepNumber, parent) {
		this._stepNumber = stepNumber;
		this._div = this.createHtml();
		parent.appendChild(this._div);
	}

	createHtml() {
		const div = document.createElement('div');
		div.classList.add('pageContent');

       	div.appendChild(this.createExitBtn());
       	div.appendChild(this.createHeader());

       	const contentDiv = document.createElement('div');
       	contentDiv.classList.add('summary');

       	contentDiv.appendChild(this.createContent());
       	contentDiv.appendChild(this.createStories(Odyssey.steps[this._stepNumber].stories));

       	div.appendChild(contentDiv);
        div.appendChild(this.createPageNav());

        return div;
	}

	createContent() {
		const element = document.createDocumentFragment();
		element.innerHTML = `<h3>Résumé</h3>
				<p>${Odyssey.steps[this._stepNumber].summary}</p>
				<h3>Histoires</h3>`;
		return element;
	}

	createStories(stories) {
		const storiesWrapper = document.createElement('div');
        storiesWrapper.classList.add('stories');

        this._stories = [];
        for (let i = 0; i < stories.length; i++) {
        	const story = new Story(stories[i], i);
        	this._stories[i] = story;
        	storiesWrapper.appendChild(story.getDiv());
        }

       	return storiesWrapper;
	}

	createExitBtn() {
		const exitBtn = document.createElement('button');
		exitBtn.classList.add('btn', 'exitBtn');
		exitBtn.innerText = 'X';
		return exitBtn;
	}

	createHeader() {
		const div = document.createElement('div')
		div.classList.add('pageHeader');
		div.innerHTML = `<p>- Étape ${this._stepNumber + 1} -</p><h2>${Odyssey.steps[this._stepNumber].name}</h2>`;
		return div;
	}

	createPageNav() {
		const div = document.createElement('div');
		div.classList.add('navBtnWrapper');

		if (this._stepNumber > 0) {
			const prevBtn = document.createElement('button');
			prevBtn.classList.add('btn', 'prevPageBtn');
			prevBtn.innerText = '<';
			div.appendChild(prevBtn);
		}

		const separator = document.createElement('div');
		separator.classList.add('separator');
		div.appendChild(separator);

		if (this._stepNumber < Odyssey.totalSteps - 1) {
			const nextBtn = document.createElement('button');
			nextBtn.classList.add('btn', 'nextPageBtn');
			nextBtn.innerText = '>';
			div.appendChild(nextBtn);
		}

		return div;
	}

	getStoryTitle(storyNumber) {
		return this.getStory(storyNumber).getTitle();
	}

	getStory(storyNumber) {
		return this._stories[storyNumber];
	}

	getStepNumber() {
		return this._stepNumber;
	}

	hide() {
		this._div.classList.add('hideToRight');
		window.setTimeout(() => this._div.remove(), 990);
	}

	getDiv() {
		return this._div;
	}
};

class Story {
	constructor(data, storyNumber) {
		const storyData = data;
		this._title = storyData.title;
		this._text = storyData.text;

		const div = document.createElement('div');
		div.classList.add('story');
		div.dataset.id = storyNumber;
		div.innerHTML = `<p>${this._title}</p>`;
		
		this._div = div;
	}

	getDiv() {
		return this._div;
	}

	getTitle() {
		return this._title;
	}

	show(parent) {
		const div = document.createElement('div');
		div.classList.add('storyContent');
		
		this._contentDiv = div;
		parent.appendChild(this._contentDiv);

       	div.innerHTML = `<button class="reversedBtn backBtn"><</button>`;
        div.innerHTML += `<div class="storyTitle"><h2>${this._title}</h2></div>`;
        div.innerHTML += `<div class="storyText"><p>${this._text}</p></div>`;
	}

	hide() {
		this._contentDiv.classList.add('hideToRight');
		window.setTimeout(() => this._contentDiv.remove(), 990);
	}
}
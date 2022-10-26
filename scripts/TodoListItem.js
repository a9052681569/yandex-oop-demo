class TodoListItem {
	static _htmlString = `
	<span class="todolist-item__text">Текст задачи</span>
	<button class="todolist-item__copy"></button>
	<button class="todolist-item__del"></button>
	`

	constructor(text, addItem) {
		this._text = text;

		this._addItem = addItem;
	}

	_getElementFromString() {
		const el = document.createElement('article');
		
		el.classList.add('todolist-item')
		
		el.insertAdjacentHTML('afterbegin', TodoListItem._htmlString);

		return el;
	}

	delHandler = () => {
		this._view.remove();
	}

	copyHandler = () => {
		this._addItem(this._text)
	}

	render(container) {
		this._view = this._getElementFromString();

		this._view.querySelector('.todolist-item__text').textContent = this._text;

		this._view.querySelector('.todolist-item__del').addEventListener('click', this.delHandler)
		this._view.querySelector('.todolist-item__copy').addEventListener('click', this.copyHandler)

		container.append(this._view);
	}

}

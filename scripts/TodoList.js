class TodoList {

	constructor(createItem) {
		this._createItem = createItem;
	}

	_getElementFromString = () => {
		const el = document.createElement('section');
		
		el.classList.add('todolist')

		return el;
	}

	addItem = (text) => {
		this._createItem(text).render(this._view);
	}

	render = (container) => {
		this._view = this._getElementFromString();

		container.append(this._view);
	}
}
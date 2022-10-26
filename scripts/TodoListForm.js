class TodoListForm {
	static _htmlString = `
	<input type="text" class="todolist-form_input" />
	<button type="submit" class="todolist-form_submit">Сохранить</button>`

	constructor(addItem) {
		this._addItem = addItem;
	}

	_getElementFromString() {
		const el = document.createElement('form');
		
		el.classList.add('todolist-form')

		el.insertAdjacentHTML('afterbegin', TodoListForm._htmlString);

		return el;
	}

	_handleSubmit = (evt) => {
		evt.preventDefault();

		const text = this._view.querySelector('.todolist-form_input').value;

		this._addItem(text);
	}

	render(container) {
		this._view = this._getElementFromString();

		this._view.addEventListener('submit', this._handleSubmit);

		container.append(this._view);
	}
}

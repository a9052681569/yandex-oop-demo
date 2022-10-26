class TodoListForm {

	static _template = document.querySelector('#todolist-form-template').content;
	
	static _htmlString = `
	<input type="text" class="todolist-form_input" />
	<button type="submit" class="todolist-form_submit">Сохранить</button>`

	_getElementFromString() {
		const el = document.createElement('form');
		
		el.classList.add('todolist-form')

		el.insertAdjacentHTML('afterbegin', TodoListForm._htmlString);

		return el;
	}

	_getElementFromTemplate() {
		return TodoListForm._template.cloneNode(true).children[0]
	}

}

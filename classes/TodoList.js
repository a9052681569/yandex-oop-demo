class TodoList {

	static _template = document.querySelector('#todolist-template').content;

	_getElementFromString() {
		const el = document.createElement('section');
		
		el.classList.add('todolist')

		return el;
	}

	_getElementFromTemplate() {
		return TodoList._template.cloneNode(true).children[0]
	}

}

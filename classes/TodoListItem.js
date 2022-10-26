class TodoListItem {

	static _template = document.querySelector('#todolist-item-template').content;

	static _htmlString = `
	<span class="todolist-item__text">Текст задачи</span>
	<button class="todolist-item__copy"></button>
	<button class="todolist-item__del"></button>
	`

	_getElementFromString() {
		const el = document.createElement('article');
		
		el.classList.add('todolist-item')

		el.insertAdjacentHTML('afterbegin', TodoListItem._htmlString);

		return el;
	}

	_getElementFromTemplate() {
		return TodoListItem._template.cloneNode(true).children[0]
	}

}

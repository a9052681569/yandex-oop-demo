const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const root = document.querySelector('.main');

const createItem = (text) => {new TodoListItem(text, todoList.addItem)};

const todoList = new TodoList(createItem);

const todoListForm = new TodoListForm(todoList.addItem);

todoListForm.render(root);
todoList.render(root);


items.forEach(item => {
	todoList.addItem(item);
})
import TodoItem from '../model/TodoItem';

let todos = [
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1),
  new TodoItem('Example Todo 2', 'Description goes here', new Date(2026, 6, 10), 1, [{}, {}]),
  new TodoItem('Example Todo 3', 'Description goes here', new Date(2026, 6, 10))
];

export function add(todo) {
  todos.push(todo);
}

export function filter(params = {}) {
  return todos;
}
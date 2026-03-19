import TodoItem from '../model/TodoItem';

const TODOS = [
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1, [{}, {}]),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10))
];

export function filter(params = {}) {
  return TODOS;
}
import TodoItem from '../model/TodoItem';

let todos = [
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1),
  new TodoItem('Example Todo 2', 'Description goes here', new Date(2026, 6, 10), 1, [{name: "File01"}, {name: "File02"}]),
  new TodoItem('Example Todo 3', 'Description goes here', new Date(2026, 6, 10))
];

export function add(todo) {
  todos.push(todo);
}

export function update(updatedTodo) {
  todos = todos.map(todo => {
    if (todo.id === updatedTodo.id) {
      return updatedTodo;
    } else {
      return todo;
    }
  })
}

export function remove(id) {
  todos = todos.filter(todo => todo.id !== id);
}

export function filter(params = {}) {
  return todos.filter(todo => 
    (params.completed != undefined ? todo.completed === params.completed : true)
  );
}
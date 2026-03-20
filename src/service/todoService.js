import TodoItem from '../model/TodoItem';

let todos = [
  new TodoItem('Buy groceries', 'Milk, eggs, ketchup', new Date(2026, 6, 12), 1),
  new TodoItem('Book dentist', 'Schedule dental checkup', new Date(2026, 6, 10), 1, [{name: "File01"}, {name: "File02"}]),
  new TodoItem('Clean study', 'Organize books', new Date(2026, 6, 11))
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

export function find(filterParams, query) {
  const queryFix = (query || "").trim().toLowerCase();

  return todos.filter(todo => 
    (filterParams?.completed != undefined ? todo.completed === filterParams.completed : true) &&
    (todo.title.toLowerCase().includes(queryFix) || todo.description.toLowerCase().includes(queryFix))
  );
}
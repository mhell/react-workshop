import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import Task from "./Task";
import EditModal from './EditModal';
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees, onMenuOpen}) => {
  const [filterParams, setFilterParams] = useState();
  const [sortFn, setSortFn] = useState();
  const [query, setQuery] = useState();
  const [editTodo, setEditTodo] = useState(null);
  const [reload, setReload] = useState(false);

  const visibleTodos = useMemo(() => {
    return todoService.find(filterParams, query).sort(sortFn);
  }, [filterParams, sortFn, query, reload]);

  function addTodo(todo) {
    todoService.add(todo);
    setReload(!reload);
  }

  function updateTodo(todo) {
    todoService.update(todo);
    setReload(!reload);
  }

  function removeTodo(id) {
    todoService.remove(id);
    setReload(!reload);
  }

  return (
    <>
      <Header title='Tasks' onMenuOpen={onMenuOpen}>
        <Searchbar onSearch={setQuery} />
      </Header>
      <main className='container-lg d-flex flex-column justify-content-center'>
        <Form assignees={assignees} onSubmit={addTodo} />
        <TaskCard onFilter={setFilterParams} onSort={setSortFn} isFiltered={filterParams} isSorted={sortFn}>
          {
            visibleTodos.map((todo) => (
              <li key={todo.id} id={'todoItem-'+todo.id} className='list-group-item todoListItem'>
                <Task todo={todo} onComplete={updateTodo} onEditing={setEditTodo} onRemove={removeTodo} />
              </li>
            ))
          }
        </TaskCard>
      </main>
      <EditModal>
        {
          editTodo && <Form key={editTodo.id} assignees={assignees} onSubmit={(todo) => { setEditTodo(null); updateTodo(todo) }} editTodo={editTodo} />
        }
      </EditModal>
    </>
  );
};

export default Tasks;
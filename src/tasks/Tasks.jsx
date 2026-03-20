import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import Task from "./Task";
import EditModal from './EditModal';
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees}) => {
  const [filterParams, setFilterParams] = useState(undefined);
  const [sortFn, setSortFn] = useState();
  const [editTodo, setEditTodo] = useState(null);
  const [reload, setReload] = useState(false);

  const visibleTodos = useMemo(() => {
    return todoService.filter(filterParams).sort(sortFn);
  }, [filterParams, sortFn, reload]);

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

  function searchTodo(params) {

  }

  return (
    <>
      <Header title='Tasks'>
        <Searchbar onSearch={searchTodo} />
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
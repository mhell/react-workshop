import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import Task from "./Task";
import EditModal from './EditModal';
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees}) => {
  const [filterParams, setFilterParams] = useState({});
  const [editing, setEditing] = useState(null);
  const [reload, setReload] = useState(false);

  const visibleTodos = useMemo(() => {
    return todoService.filter(filterParams);
  }, [filterParams, reload]);

  function addTodo(todo) {
    todoService.add(todo);
    setReload(!reload);
  }

  function filterTodo(params) {

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
      <Header title='Tasks'>
        <Searchbar onSearch={filterTodo} />
      </Header>
      <main className='container-lg d-flex flex-column justify-content-center'>
        <Form assignees={assignees} onSubmit={addTodo} />
        <TaskCard onFilter={filterTodo}>
          {
            visibleTodos.map((todo) => (
              <li key={todo.id} id={'todoItem-'+todo.id} className='list-group-item todoListItem'>
                <Task todo={todo} onComplete={updateTodo} onEditing={setEditing} onRemove={removeTodo} />
              </li>
            ))
          }
        </TaskCard>
      </main>
      <EditModal>
        {
          editing && <Form assignees={assignees} onSubmit={(todo) => { setEditing(null); updateTodo(todo) }} editTodo={editing} />
        }
      </EditModal>
    </>
  );
};

export default Tasks;
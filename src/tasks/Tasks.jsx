import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import Task from "./Task";
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees}) => {
  const [filterParams, setFilterParams] = useState({});
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

  function changeTodo(todo) {
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
        <Form assignees={assignees} onAddTodo={addTodo} />
        <TaskCard onFilter={filterTodo}>
          {
            visibleTodos.map((todo) => (
              <li key={todo.id} id={'todoItem-'+todo.id} className='list-group-item todoListItem'>
                <Task todo={todo} onChange={changeTodo} onRemove={removeTodo} />
              </li>
            ))
          }
        </TaskCard>
      </main>
    </>
  );
};

export default Tasks;
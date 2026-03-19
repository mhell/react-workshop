import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees}) => {
  const [filterParams, setFilterParams] = useState({});
  const [reload, setReload] = useState(false);

  const visibleTodos = useMemo(() => {
    console.log(todoService.filter());
    return todoService.filter(filterParams);
  }, [filterParams, reload]);

  function addTodo(todo) {
    todoService.add(todo);
    setReload(!reload);
  }

  function filterTodo(params) {

  }

  function changeTodo(todo) {

  }

  function deleteTodo(todoId) {

  }

  return (
    <>
      <Header title='Tasks'>
        <Searchbar onSearch={filterTodo} />
      </Header>
      <main className='container-lg d-flex flex-column justify-content-center'>
        <Form assignees={assignees} onAddTodo={addTodo} />
        <TaskCard todos={visibleTodos} assignees={assignees} onFilter={filterTodo} onChange={changeTodo} onDelete={deleteTodo} />
      </main>
    </>
  );
};

export default Tasks;
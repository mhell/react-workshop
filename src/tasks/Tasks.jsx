import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import { useState, useMemo } from 'react';
import * as todoService from '../service/todoService';

const Tasks = ({assignees}) => {
  const [filterParams, setFilterParams] = useState({});

  const visibleTodos = useMemo(() => {
    return todoService.filter(filterParams);
  }, [filterParams]);

  function addTodo(todo) {

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
        <Form assignees={assignees} onNewTask={addTodo} />
        <TaskCard todos={visibleTodos} assignees={assignees} onFilter={filterTodo} onChange={changeTodo} onDelete={deleteTodo} />
      </main>
    </>
  );
};

export default Tasks;
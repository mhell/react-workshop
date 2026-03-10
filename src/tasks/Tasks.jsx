import React from 'react';
import Header from './Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import TodoItem from '../model/TodoItem';

const todoItems = [
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1, [{}, {}]),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10))
];

const Tasks = ({assignees}) => {
  return (
    <>
      <Header title='Tasks'>
        <Searchbar />
      </Header>
      <div className='container-lg d-flex flex-column justify-content-center'>
        <Form assignees={assignees} />
        <TaskCard tasks={todoItems} assignees={assignees} />
      </div>
    </>
  );
};

export default Tasks;
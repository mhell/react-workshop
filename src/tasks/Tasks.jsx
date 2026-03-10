import React from 'react';
import Header from '../common/Header';
import Form from './Form';
import TaskCard from './TaskCard';
import Searchbar from '../common/Searchbar';
import TodoItem from '../model/TodoItem';
import { useState } from 'react';

const tasksInit = [
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10), 1, [{}, {}]),
  new TodoItem('Example Todo 1', 'Description goes here', new Date(2026, 6, 10))
];

const Tasks = ({assignees}) => {
  const [tasks, setTasks] = useState(tasksInit);

  return (
    <>
      <Header title='Tasks'>
        <Searchbar />
      </Header>
      <main className='container-lg d-flex flex-column justify-content-center'>
        <Form assignees={assignees} />
        <TaskCard tasks={tasks} assignees={assignees} />
      </main>
    </>
  );
};

export default Tasks;
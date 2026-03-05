import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoCard from './TodoCard';

const Tasks = () => (
  <>
    <Header />
    <div className="container-lg d-flex flex-column justify-content-center">
      <Form />
      <TodoCard />
    </div>
  </>
);

export default Tasks;
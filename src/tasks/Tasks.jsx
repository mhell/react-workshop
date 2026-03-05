import React from 'react';

const Tasks = () => (
  <div>
    <HeaderContent />
  </div>
);

const HeaderContent = () => (
  <div className='container-fluid mx-4 mt-3'>
    <div className='row'>
      <div className="col-sm-4">
        <h1 className="h3">Tasks</h1>
      </div>
      <div className="col-sm-4 text-center">
        <div class="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search tasks..." />
            <span class="input-group-text bg-white">
              <i class="bi bi-search"></i>
            </span>
        </div>
      </div>
    </div>
  </div>
);

export default Tasks;
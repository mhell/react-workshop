import React from 'react';

const Header = () => (
  <div className='container-fluid px-4 pt-3'>
    <div className='row px-2'>
      <div className='col-2'>
        <h1 className='h3'>Tasks</h1>
      </div>
      <div className='col-sm-9 col-md-6 offset-sm-1'>
        <div id='search' className='input-group mx-auto mb-3'>
            <input type='text' className='form-control' placeholder='Search tasks...' />
            <span className='input-group-text bg-white'>
              <i className='bi bi-search'></i>
            </span>
        </div>
      </div>
    </div>

    <hr className='mx-2'/>
  </div>
);

export default Header;
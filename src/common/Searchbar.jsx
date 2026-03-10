import React from 'react';

const Searchbar = () => {
  return (
    <div id='search' className='input-group mx-auto mb-3'>
        <input type='text' className='form-control' placeholder='Search tasks...' />
        <span className='input-group-text bg-white'>
          <i className='bi bi-search'></i>
        </span>
    </div>
  );
};

export default Searchbar;
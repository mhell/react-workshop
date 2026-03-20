import { useState } from "react";

const Searchbar = ({onSearch}) => {
  return (
    <div id='search' className='input-group mx-auto'>
        <input type='text' className='form-control' placeholder='Search tasks...' onChange={(e) => onSearch(e.target.value)}/>
        <button type="button" className='input-group-text bg-white'>
          <i className='bi bi-search'></i>
        </button>
    </div>
  );
};

export default Searchbar;
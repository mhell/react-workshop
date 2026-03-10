import React from 'react';

const Header = ({title, children}) => {
  return (
    <div className='container-fluid px-4 pt-3'>
      <div className='row px-2'>
        <div className='col-2'>
          <h1 className='h3'>{title}</h1>
        </div>
        <div className='col-sm-9 col-md-6 offset-sm-1'>
          {children}
        </div>
      </div>

      <hr className='mx-2'/>
    </div>
  );
};

export default Header;
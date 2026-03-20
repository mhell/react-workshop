// d-flex align-items-center 
const Header = ({title, children, onMenuOpen}) => {
  return (
    <header className='container-fluid px-4'>
      <div className='row align-items-center px-2 py-2 my-3'> 
        <div className='col-3 col-md-2'>
          <h1 className='h3 m-0'>{title}</h1>
        </div>
        <div className='col-7 col-md-6 offset-md-1'>
          {children}
        </div>
        <div className="col-2 col-md-3 text-end d-lg-none">
          <button type="button" className="border-0 bg-body" onClick={onMenuOpen}>
            <i className="bi bi-list fs-4"></i>
          </button>
        </div>
      </div>

      <hr className='mx-2'/>
    </header>
  );
};

export default Header;
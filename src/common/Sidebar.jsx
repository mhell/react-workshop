
const Sidebar = ({navlinks, username}) => {
  return (
    <aside id="sidebar" className="text-bg-light d-flex align-items-center align-items-lg-start ps-lg-5 py-4 py-lg-5 flex-column h-100">
      <nav >
        <i className="bi bi-columns-gap fs-3"></i>
        <ul className="mt-5 pt-3 nav flex-column mb-auto">
          {
            navlinks.map((link) => (
              <li className='nav-item my-2' key={link.name}>
                <a href={link.href} className='p-0 nav-link link-dark'>
                    <i className={`bi ${link.icon} me-4`}></i>
                    {link.name}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      <div className='mt-auto'>
        <p className='username'>{username}</p>
        <span>
          <i className='bi bi-box-arrow-in-right me-2'></i>
          Logout
        </span>
      </div>
    </aside>
  );
};

export default Sidebar;
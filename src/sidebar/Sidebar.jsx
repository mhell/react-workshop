import React from 'react';

const navlinks = [
  { name: "Dashboard", icon: "bi-grid", link: "#" },
  { name: "Users", icon: "bi-people", link: "#" },
  { name: "Tasks", icon: "bi-list-check", link: "#" },
  { name: "Settings", icon: "bi-gear", link: "#" }
]

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-5 bg-light" style={{height: "100vh"}}>

      <i className="bi bi-columns-gap fs-3"></i>
        <ul className="mt-5 pt-3 nav vav-pills flex-column mb-auto">
          {
            navlinks.map((link) => (
              <li className='nav-item my-2' key={link.name}>
                <a href={link.name} className='p-0 nav-link link-dark'>
                    <i className={`bi ${link.icon} me-4`}></i>
                    {link.name}
                </a>
              </li>
            ))
          }
        </ul>
        <div>
          <p>Username</p>
          <span className="small">
           <i className="bi bi-box-arrow-in-right me-2"></i>
            Logout
          </span>
        </div>
    </div>
  );
};

export default Sidebar;
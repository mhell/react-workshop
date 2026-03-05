import React from 'react';

const navlinks = [
  { name: "Dashboard", icon: "bi-grid", link: "#" },
  { name: "Users", icon: "bi-people", link: "#" },
  { name: "Tasks", icon: "bi-list-check", link: "#" },
  { name: "Settings", icon: "bi-gear", link: "#" }
]

const Sidebar = () => {
  return (
    <div className="flex-shrink-0 text-bg-light h-100">
      <div className='fixed-top p-5'>
        <i className="bi bi-columns-gap fs-3"></i>
        <ul className="mt-5 pt-3 nav flex-column mb-auto">
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
      </div>
      <div className='fixed-bottom p-5'>
        <p className='username'>Username</p>
        <span>
          <i className='bi bi-box-arrow-in-right me-2'></i>
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
import Sidebar from './common/Sidebar.jsx'
import Tasks from './tasks/Tasks.jsx'
import { useRef, useState, useEffect } from 'react';
import * as userService from './service/userService.js'

const PAGES = [
  { name: "Dashboard", icon: "bi-grid", href: "#" },
  { name: "Users", icon: "bi-people", href: "#" },
  { name: "Tasks", icon: "bi-list-check", href: "#" },
  { name: "Settings", icon: "bi-gear", href: "#" }
];

function App() {
  const [users, setUsers] = useState(userService.getAll());
  const [loggedIn, setLoggedIn] = useState(userService.getLoggedIn());
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='d-flex'>
        <div id='sidebar-container' className={menuOpen ? "menu-open" : ""}>
          <Sidebar navlinks={PAGES} username={loggedIn.name}/>
        </div>
        <div id='content-container' className='flex-grow-1'>
          { menuOpen && <Dimmer onClick={() => menuOpen &&setMenuOpen(false)} /> }
          <Tasks assignees={users} onMenuOpen={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>
    </>
  )
}

function Dimmer({onClick}) {
  const dimmerRef = useRef(null);

  useEffect(() => {
    dimmerRef.current.style.opacity = "50%";
    return () => {
     // dimmerRef.current.style.opacity = 0;
    };
  }, []);

  return (
    <div id="dimmer" className='position-absolute w-100 h-100 bg-dark' onClick={onClick} ref={dimmerRef}></div>
  )
}

export default App

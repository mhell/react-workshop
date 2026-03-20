import Sidebar from './common/Sidebar.jsx'
import Tasks from './tasks/Tasks.jsx'
import { useState } from 'react';
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

  return (
    <>
      <div className='d-flex'>
        <div id='sidebar-container'>
          <Sidebar navlinks={PAGES} username={loggedIn.name}/>
        </div>
        <div id='content-container' className='flex-grow-1'>
          <Tasks assignees={users} />
        </div>
      </div>
    </>
  )
}

export default App

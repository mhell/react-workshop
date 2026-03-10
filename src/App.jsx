import Sidebar from './common/Sidebar.jsx'
import Tasks from './tasks/Tasks.jsx'
import User from './model/User.js'
import { useState } from 'react';

const pages = [
  { name: "Dashboard", icon: "bi-grid", href: "#" },
  { name: "Users", icon: "bi-people", href: "#" },
  { name: "Tasks", icon: "bi-list-check", href: "#" },
  { name: "Settings", icon: "bi-gear", href: "#" }
];

const usersInit = [
  new User('Mattias Hellman'),
  new User('Sindhuja Parthasarathy'),
  new User('Iffat Zabin'),
  new User('Zackaria Azzoug'),
  new User('Alexander Haitin')
];

function App() {
  const [users, setUsers] = useState(usersInit);
  const [loggedIn, setLoggedIn] = useState(users[0].name);

  return (
    <>
      <div className='d-flex'>
        <div id='sidebar-container' className='flex-shrink-0'>
          <Sidebar navlinks={pages} username={loggedIn}/>
        </div>
        <div className='flex-grow-1'>
          <Tasks assignees={users} />
        </div>
      </div>
    </>
  )
}

export default App

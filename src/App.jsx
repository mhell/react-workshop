import { useState } from 'react'
import Sidebar from './sidebar/Sidebar.jsx'
import Tasks from './tasks/Tasks.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex">
        <div style={{width: "250px"}}>
          <Sidebar />
        </div>
        <div className="flex-grow-1">
          <Tasks />
        </div>
      </div>
    </>
  )
}

export default App

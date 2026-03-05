import Sidebar from './sidebar/Sidebar.jsx'
import Tasks from './tasks/Tasks.jsx'

function App() {
  return (
    <>
      <div className='d-flex'>
        <div id='sidebar' className='flex-shrink-0'>
          <Sidebar />
        </div>
        <div className='flex-grow-1'>
          <Tasks />
        </div>
      </div>
    </>
  )
}

export default App

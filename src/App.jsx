import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <div className="container">
          <Outlet />
        </div>
      <h1>Projeto Axios</h1>
      </div>
    </>
  )
}

export default App

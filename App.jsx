import React from 'react'
import Navigation from './Navigation-Bar/Navigation'
import './index.css'
import NavBar from './NavBar/NavBar'
import AddTask from './Task/AddTask'
import Pop from './Popup/Pop'
const App = () => {
  return (
    <>
        <div className="full-container">
          
          <NavBar></NavBar>
          <AddTask></AddTask>
          <Navigation></Navigation>
          
        </div>
       
        
    </>
  )
}

export default App
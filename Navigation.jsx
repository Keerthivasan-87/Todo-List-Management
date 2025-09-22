import React from 'react'
import NavBar from '../NavBar/NavBar'
import AddTask from '../Task/AddTask'

const Navigation = () => {
  return (
            <>
            <div className="nav-container">
                <header>
                    <h2>Assign Tasker  App</h2>
                </header>

                <div className="navigation">
                    <p>Navigation</p>
                    <div className="All-items">
                        <div className="items">
                            <img src="./Navigation.jsx" alt="tool image" />
                            <h3>Tasks</h3>
                        </div>
                        <div className="items">
                              <img src="" alt="tool image" />
                            <h3>Members</h3>
                        </div>
                        <div className="items">
                              <img src="" alt="tool image" />
                            <h3>File Management</h3>
                            
                        </div>
                        <div className="items">
                              <img src="" alt="tool image" />
                            <h3>Settings</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
             </>
  )
}

export default Navigation
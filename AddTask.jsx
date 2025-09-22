import React from 'react'

import "./AddTask.css"
import Pop from '../Popup/Pop'


const AddTask = () => {
  return (
    <main className='main-task'>
        <section className='Add-task'>
                <div className="Task-add">
                    <h4>Tasks</h4>
                    <div className="but">
                        <i>J</i>
                        <button > Add New Group</button>
                    </div>
                </div>

                <div className="soting">
                    <p>Sort by</p>
                    <select name="" id="">
                        <option value="Mytask">My Tasks</option>
                        <option value="NewTask">NewTask</option>
                    </select>
                </div>
        </section>
       
    </main>
  )
}

export default AddTask
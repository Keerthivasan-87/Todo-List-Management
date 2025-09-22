import React from 'react'
import './Pop.css'
const Pop = () => {
  return (
    <div className="popup-message">
    <div className="popup">
        <div className="task-title">
            <label htmlFor="">TaskTitle</label>
            <input type="text" />
        </div>
        <div className="task-title">
            <label htmlFor="">Description</label>
            <textarea name="" id=""></textarea>
        </div>
        <div className="task-title">
            <label htmlFor="">DueDate</label>
            <input type="date" />
        </div>
        <div className="task-title">
            <label htmlFor="">Priority</label>
            <select name="" id="">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>

        <div className="btns">
            <button>Save</button>
            <button>Cancel</button>
        </div>
    </div>
    </div>
  )
}

export default Pop
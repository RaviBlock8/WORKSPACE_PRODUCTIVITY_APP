import React,{useState,useContext} from 'react'
import { TaskContext } from '../contexts/TaskContext'
import '../styles/addform.css'
function AddTasks() {
    let [list,setList]=useContext(TaskContext)
    let [taskName,setTaskName]=useState(null)
    const updateName=(e)=>{
        setTaskName(e.target.value)
    }
    
    const onSubmit=(e)=>{
        e.preventDefault()
        let task={
            id:list.length+1,
            name:taskName,
            start:null,
            stop:null
        }
        setList([...list,task])
        e.target.reset()
    }
    return (
        <div id="addt">
            <form onSubmit={onSubmit}>
                <div>
                    <label>Task Name:</label>
                    <input type="text" name="name" onChange={updateName}></input>
                </div>
                <button type="submit">+</button>
            </form>
            
        </div>
    )
}

export default AddTasks

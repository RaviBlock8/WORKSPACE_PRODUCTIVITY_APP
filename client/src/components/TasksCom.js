import React,{useContext}from 'react'
import {TaskContext} from '../contexts/TaskContext'
import '../styles/taskcom.css'

function TasksCom() {
    let [list,setList]=useContext(TaskContext)

    const displayTask=()=>{
        let toDo=list.filter((task)=>task.stop!=null)
        return toDo.map((task)=>{
            return <h2>{task.name}</h2>
        })
    }
    return (
        <div id="com">
            <h1>Tasks Completed</h1>
            <div>
                {displayTask()}
            </div>
            
        </div>
    )
}

export default TasksCom

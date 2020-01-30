import React,{useContext}from 'react'
import {TaskContext} from '../contexts/TaskContext'
import '../styles/taskcom.css'

function TasksCom() {
    let [list,setList]=useContext(TaskContext)

    const displayTask=()=>{
        let toDo=list.filter((task)=>task.stop!=null)
        return toDo.map((task)=>{
            return (
                <div id="tab">
                    <div><h2>{task.name}</h2></div>
                    <div id="details">
                        <p>Start Time:{task.start}</p>
                        <p>Stop Time:{task.stop}</p>
                    </div>

                </div>
            )
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

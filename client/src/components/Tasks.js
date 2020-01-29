import React,{useContext}from 'react'
import Task from './Task'
import {TaskContext} from '../contexts/TaskContext'
import '../styles/tasks.css'

function Tasks() {
    let [list,setList]=useContext(TaskContext)
    
    const onClick=(id)=>{
        list[id-1].stop=Date.now()
        console.log(list)
        setList([...list])
    }
    const displayTask=()=>{
        let toDo=list.filter((task)=>task.stop==null)
        return toDo.map((task)=>{
            return <Task val={task} key={task.id} onClick={onClick}></Task>
        })
    }

    
    return (
        <div id="tasks">
            <h1>Tasks to be done</h1>
            <div id="con">
            {displayTask()}
            </div>
            
        </div>
    )
}


export default Tasks

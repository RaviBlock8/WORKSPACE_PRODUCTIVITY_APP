import React,{createContext,useState} from 'react'
import data from '../data/data'
export const TaskContext=createContext()

export const TaskProvider=(props)=>{
    let [list,setList]=useState(data)
    return (
        <TaskContext.Provider value={[list,setList]}>
            {props.children}
        </TaskContext.Provider>
    )
}






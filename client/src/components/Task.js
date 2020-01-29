import React from 'react'
import '../styles/task.css'
function Task(props) {
    let _start
    let onClick=(e)=>{
        props.onClick(props.val.id)
    }
    function onStart(e){
        _start=Date.now()
    }
    let onStop=(e)=>{
        console.log(Date.now()-_start)
    }
    return (
        <div id="task">
            <div>
            <p>{props.val.name}</p>
            </div>
            <form>
                <button type="button" onClick={onStart}>Start</button>
                <button type="button" onClick={onStop}>Stop</button>
                <input type="checkbox" onClick={onClick}></input>
            </form>
        </div>
    )
}


export default Task
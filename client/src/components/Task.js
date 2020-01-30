import React from 'react'
import '../styles/task.css'
function Task(props) {
    let _start
    let onClick=(e)=>{
        props.onClick(props.val.id)
    }
    function onStart(e){
        _start=Date.now()
        e.target.style.display='none'
        const _dateobj=new Date(_start*1000)
        props.onStart(props.val.id,_dateobj.toUTCString())
    }
    let onStop=(e)=>{
        let _stop=Date.now()
        console.log(`duration:${_stop-_start}`)
        const _dateobj=new Date(_stop*1000)
        props.onStop(props.val.id,_dateobj.toUTCString())
    }

    let showDetails=()=>{
        let start=props.val.start!=null?props.val.start:0
        return <p>Started:{start}</p>
    }
    return (
        <div id="task">
            <div>
            <p>{props.val.name}</p>
            </div>
            <form>
                <button type="button" onClick={onStart}>Start</button>
                <button type="button" onClick={onStop}>Stop</button>
                {/* <input type="checkbox" onClick={onClick}></input> */}
            </form>
            <div id="details">
                {showDetails()}
            </div>
        </div>
    )
}


export default Task
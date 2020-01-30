import React from 'react';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import TaskCom from './components/TasksCom'
import {TaskProvider} from './contexts/TaskContext'


function App() {
  return (
    <TaskProvider>
      <div id="app">
        <div>
        <AddTasks></AddTasks>
        </div>
        <div id="main">
        <Tasks></Tasks>
      
      <TaskCom></TaskCom>

        </div>
      
      
      </div>
    </TaskProvider>
    
  );
}

export default App;

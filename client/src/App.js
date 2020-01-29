import React from 'react';
import Tasks from './components/Tasks'
import AddTasks from './components/AddTasks'
import TaskCom from './components/TasksCom'
import {TaskProvider} from './contexts/TaskContext'


function App() {
  return (
    <TaskProvider>
      <div className="App">
      <Tasks></Tasks>
      <AddTasks></AddTasks>
      <TaskCom></TaskCom>
      </div>
    </TaskProvider>
    
  );
}

export default App;

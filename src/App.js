import {useState} from 'react'

import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Exercise',
        day: 'March 8th at 6:00am',
        reminder: true
    },    
    {
        id: 2,
        text: 'Go to Work',
        day: 'March 8th at 8:00am',
        reminder: true
    },    
    {
        id: 3,
        text: 'buy lunch',
        day: 'March 8th at 11:30am',
        reminder: false
    }
  ])
  // Add Task
  const addTask = (task) =>{
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="App">
      <Header 
        onAdd={()=>setShowAddTask(!showAddTask)}
        buttonText={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask}
          onToggle={toggleReminder}
        /> 
      : 'No Task'}
    </div>
  );
}


export default App;

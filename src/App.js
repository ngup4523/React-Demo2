import './App.css';
import Header from './components/Header';
import React from 'react';
import Tasks from './components/Tasks';
import { useState } from "react"
import AddTask from './components/AddTask';

function App() {
  const [showForm, setAddForm] = useState(false)
  const [tasks,setTasks] = useState([
    {   id: 1,
        text: 'Food Shopping',
        day: 'Feb 5th',
        reminder: false
    },
    {   id: 2,
        text: 'Food Shopping2',
        day: 'Feb 5th',
        reminder: false
    },
    {
        id: 3,
        text: 'Food Shopping3',
        day: 'Feb 5th',
        reminder: false
    }
  ])

  const deleteAction = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (
      task.id ===id ? {...task, reminder:
         !task.reminder} : task
    )))
  }

  const addTask = (task) => {
    // setTasks(...tasks, {})
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id, ...task}
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  const toggleForm = () => {
    setAddForm(!showForm)
  }

  return (
    <div className = 'container'>
      <Header title='Task Tracker' showForm={showForm} onClick={toggleForm} />
      { showForm && <AddTask addTask={ addTask } /> }
      <Tasks tasks={tasks} onDelete={deleteAction} onToggle={toggleReminder} />
    </div>
      
  );
}

export default App;

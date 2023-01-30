import { useState } from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskListHeader from './components/TaskListHeader'
import TaskList from './components/TaskList'

import styles from './App.module.css'
import './global.css'

export interface Task {
    description: string;
    checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask tasks={tasks} setTasks={setTasks} />
        <TaskListHeader tasks={tasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App

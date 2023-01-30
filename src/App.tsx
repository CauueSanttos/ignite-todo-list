import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskListHeader from './components/TaskListHeader'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />
        <TaskListHeader />
      </div>
    </div>
  )
}

export default App

import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskList from './components/TaskList'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <AddTask />
        <TaskList />
      </div>
    </div>
  )
}

export default App

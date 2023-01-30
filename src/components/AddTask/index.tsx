import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';

import styles from './index.module.css';
import plusIcon from '../../assets/plus.svg';
import { Task } from '../../App';

interface AddTaskProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>
};

const AddTask: React.FC<AddTaskProps> = ({ tasks, setTasks }) => {
  const [newTask, setNewTask] = useState('');

  const handleChangeNewTask = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  }, []);

  const handleAddNewTask = useCallback(() => {
    setTasks([...tasks, { description: newTask, checked: false }]);
    setNewTask('');
  }, [newTask, tasks, setTasks]);

  return (
    <div className={styles.addTask}>
        <input 
          placeholder="Adicione uma nova tarefa"
          onChange={handleChangeNewTask}
          value={newTask}
        />
    
        <button type="button" onClick={handleAddNewTask}>
            Criar

            <img src={plusIcon} alt="Criar tarefa" />
        </button>
    </div>
  );
}

export default AddTask;
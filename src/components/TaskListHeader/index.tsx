import React, { useCallback } from 'react';
import { Task } from '../../App';

import styles from './index.module.css';

interface TaskListHeaderProps {
  tasks: Task[];
}

const TaskListHeader: React.FC<TaskListHeaderProps> = ({ tasks }) => {
  const handleCheckedTasks = useCallback(() => {
    const checkedTasks = tasks.filter((task) => task.checked).length;

    if (checkedTasks > 0) {
      return `${checkedTasks} de ${tasks.length}`;
    }

    return 0
  }, [tasks])

  return (
    <div className={styles.taskContainer}>
        <span className={styles.title}>
            Tarefas criadas

            <span>{tasks.length}</span>
        </span>

        <span className={styles.title}>
            Concluídas

            <span>{handleCheckedTasks()}</span>
        </span>
    </div>
  );
}

export default TaskListHeader;
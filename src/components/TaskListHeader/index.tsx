import React from 'react';

import styles from './index.module.css';

const TaskListHeader: React.FC = () => {
  return (
    <div className={styles.taskContainer}>
        <span className={styles.title}>
            Tarefas criadas

            <span>5</span>
        </span>

        <span className={styles.title}>
            Concluídas

            <span>2 de 5</span>
        </span>
    </div>
  );
}

export default TaskListHeader;
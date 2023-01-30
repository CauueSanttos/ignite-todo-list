import React from 'react';

import styles from './index.module.css';

const TaskList: React.FC = () => {
  return (
    <ul className={styles.taskList}>
        <li>
            <div>
                <span className={`material-symbols-outlined ${styles.icon} ${styles.iconCheck}`}>
                    circle
                </span>

                <span>Essa tarefa teste</span>
            </div>

            <span className={`material-symbols-outlined ${styles.iconTrash}`}>
                delete
            </span>
        </li>

        <li>
            <div>
                <span className={`material-symbols-outlined ${styles.icon} ${styles.iconChecked}`}>
                    check_circle
                </span>

                <span className={styles.textChecked}>Essa tarefa teste</span>
            </div>

            <span className={`material-symbols-outlined ${styles.iconTrash}`}>
                delete
            </span>
        </li>
    </ul>
  );
}

export default TaskList;
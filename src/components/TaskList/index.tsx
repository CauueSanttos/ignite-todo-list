import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { Task } from '../../App';

import styles from './index.module.css';

interface TaskListProps {
    tasks: Task[];
    setTasks: Dispatch<SetStateAction<Task[]>>
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
    const handleCheckTask = useCallback((index: number, checked: boolean) => {
        const newTasks = tasks.map((task, indexMap) => {
            if (indexMap === index) {
                return {
                    ...task,
                    checked,
                };
            }

            return task;
        })

        setTasks([...newTasks]);
    }, [tasks, setTasks]);

    const handleRemoveTask = useCallback((indexTask: number) => {
        const newTasks = tasks.filter((_, index) => index !== indexTask);

        setTasks([...newTasks]);
    }, [setTasks, tasks]);

    return (
        <ul className={styles.taskList}>
            {tasks.map((task, index) => {
                return (
                    <li key={index}>
                        <div>
                            {task.checked ? (
                                <span 
                                    className={`material-symbols-outlined ${styles.icon} ${styles.iconChecked}`}
                                    onClick={() => handleCheckTask(index, !task.checked)}
                                >
                                    check_circle
                                </span>
                            ) : (
                                <span 
                                    className={`material-symbols-outlined ${styles.icon} ${styles.iconCheck}`}
                                    onClick={() => handleCheckTask(index, !task.checked)}
                                >
                                    circle
                                </span>
                            )}

                            <span 
                                className={task.checked ? styles.textChecked : ''}
                            >
                                {task.description}
                            </span>
                        </div>

                        <span 
                            className={`material-symbols-outlined ${styles.iconTrash}`}
                            onClick={() => handleRemoveTask(index)}
                        >
                            delete
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default TaskList;
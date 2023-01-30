import React from 'react';

import styles from './index.module.css';
import plusIcon from '../../assets/plus.svg';

const AddTask: React.FC = () => {
  return (
    <div className={styles.addTask}>
        <input placeholder="Adicione uma nova tarefa" />
    
        <button type="button">
            Criar

            <img src={plusIcon} alt="Criar tarefa" />
        </button>
    </div>
  );
}

export default AddTask;
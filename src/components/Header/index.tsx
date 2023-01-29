import React from 'react';
import styles from './index.module.css';

import igniteLogo from '../../assets/todo.png';

function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}

export default Header;
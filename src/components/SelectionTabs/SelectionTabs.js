import React from 'react';
import styles from './SelectionTabs.module.scss';

const SelectionTabs = function () {
  return (
    <div className={styles.tabs}>
      <div className={styles.active}>Самый дешевый</div>
      <div>Самый быстрый</div>
      <div>Оптимальный</div>
    </div>
  );
};

export default SelectionTabs;

import React from 'react';
import styles from './Filters.module.scss';

const Filters = function () {
  return (
    <div className={styles.filters}>
      <div>Количество пересадок</div>
      <ul>
        <li>
          <label className={styles['checkbox-label']}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <span className={styles['check-box']} />
            Все
          </label>
        </li>
        <li>
          <label className={styles['checkbox-label']}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <span className={styles['check-box']} />
            Без пересадок
          </label>
        </li>
        <li>
          <label className={styles['checkbox-label']}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <span className={styles['check-box']} />1 пересадка
          </label>
        </li>
        <li>
          <label className={styles['checkbox-label']}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <span className={styles['check-box']} />2 пересадки
          </label>
        </li>
        <li>
          <label className={styles['checkbox-label']}>
            <input type="checkbox" className={styles['checkbox-input']} />
            <span className={styles['check-box']} />3 пересадки
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;

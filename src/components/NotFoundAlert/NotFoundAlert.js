import React from 'react';
import styles from './NotFoundAlert.module.scss';

const NotFoundAlert = function () {
  return (
    <div className={styles['notFound-message']}>
      <span>Рейсов, подходящих под заданные фильтры, не найдено!</span>
    </div>
  );
};

export default NotFoundAlert;

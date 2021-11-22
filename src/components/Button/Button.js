import React from 'react';

import styles from './Button.module.scss';

const Button = function () {
  return (
    <div className={styles['button-show-more__wrapper']}>
      <button type="button">Показать еще 5 билетов!</button>
    </div>
  );
};

export default Button;

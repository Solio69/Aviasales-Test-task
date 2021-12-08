import React from 'react';
import icon from './error_Icon.png';

import styles from './ErrorAlert.module.scss';

const ErrorAlert = function () {
  return (
    <div className={styles['error-message']}>
      <img src={icon} alt="error" />
      <span>Error!</span>
    </div>
  );
};

export default ErrorAlert;

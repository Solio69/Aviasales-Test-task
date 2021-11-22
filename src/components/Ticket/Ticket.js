import React from 'react';
import styles from './Ticket.module.scss';

import logo from './Logo.png';

const Ticket = function () {
  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header__prise']}>13 400 Р </div>
        <div className={styles['ticket-header__logo']}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles['ticket-content']}>
        <div>
          <div className={styles['ticket-content__title']}>MOW – HKT</div>
          <div className={styles['ticket-content__text']}>11:20 – 00:50</div>
        </div>
        <div>
          <div className={styles['ticket-content__title']}>В пути</div>
          <div className={styles['ticket-content__text']}>13ч 30м</div>
        </div>
        <div>
          <div className={styles['ticket-content__title']}>1 пересадка</div>
          <div className={styles['ticket-content__text']}>HKG</div>
        </div>
      </div>
      <div className={styles['ticket-content']}>
        <div>
          <div className={styles['ticket-content__title']}>MOW – HKT</div>
          <div className={styles['ticket-content__text']}>11:20 – 00:50</div>
        </div>
        <div>
          <div className={styles['ticket-content__title']}>В пути</div>
          <div className={styles['ticket-content__text']}>13ч 30м</div>
        </div>
        <div>
          <div className={styles['ticket-content__title']}>1 пересадка</div>
          <div className={styles['ticket-content__text']}>HKG</div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;

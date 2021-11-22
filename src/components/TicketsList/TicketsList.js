import React from 'react';
import styles from './TicketsList.module.scss';
import Ticket from '../Ticket';

const TicketsList = function () {
  return (
    <div className={styles['tickets-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketsList;

/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './TicketsList.module.scss';
import Ticket from '../Ticket';
import NotFoundAlert from '../NotFoundAlert';
import ErrorAlert from '../ErrorAlert';
import Button from '../Button';

const TicketsList = function (props) {
  const { packetTickets, filterItems, sortButtons, error, ticketsCounter } = props;

  // собирает значания выбранных фильтров в масиив
  const selectedFiltersArr = filterItems
    .map((item) => (item.isCheck ? Number(item.name) : null))
    .filter((el) => el !== null);

  // получает сроку с именем выбранной кнопки сортировки
  const sortValueStr = sortButtons.find((el) => el.isActive).name;

  // создает новый массив с новыми свойствами объекта
  const newpacketTickets = packetTickets.map((el) => {
    // сумма минут перелаетов туда и обратно
    const sumMin = el.segments[0].duration + el.segments[1].duration;
    el.sumMin = sumMin;
    // сумма минут и цены
    const sumMinAndPrace = el.sumMin + el.price;
    el.sumMinAndPrace = sumMinAndPrace;
    return el;
  });

  // отфильтрованный масиив
  const filtrationArr = newpacketTickets.filter((item) => {
    // кол-во пересадок туда
    const transfersThere = item.segments[0].stops.length;
    // кол-во пересадок обратно
    const transfersBack = item.segments[1].stops.length;
    // если в массиве выбранных фильтров есть значение равное количеству пересадок туда и обратно
    if (selectedFiltersArr.includes(transfersThere) && selectedFiltersArr.includes(transfersBack)) {
      return item; // вернет значение
    }
  });

  // возвращает отсортированный массив
  const sorting = (arr, strName) => {
    // сортирует массив в зависимости от имени кнопки
    switch (strName) {
      case 'inexpensive':
        arr.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case 'quick':
        arr.sort((a, b) => (a.sumMin > b.sumMin ? 1 : -1));
        break;
      case 'optimal':
        arr.sort((a, b) => (a.sumMinAndPrace > b.sumMinAndPrace ? 1 : -1));
        break;
      default:
        return [];
    }

    return arr;
  };

  // получает отфильтрованный массив и значение кнопки сорнировки, возвращает отсортированный массив
  const list = sorting(filtrationArr, sortValueStr).map((item, i) => {
    if (i < ticketsCounter) {
      return <Ticket key={i} ticket={item} />;
    }
  });

  // сообщение что подходящих под фильтры рейсов не обнаружено
  const alertNotFound = !filtrationArr.length && !error ? <NotFoundAlert /> : null;

  // сообщение об ошибке
  const errorShow = error ? <ErrorAlert /> : null;

  const buttonShowMore = filtrationArr.length ? <Button /> : null;

  return (
    <div className={styles['tickets-list']}>
    
        {list}
        {alertNotFound}
        {errorShow}
        {buttonShowMore}
 
    </div>
  );
};

const mapStateToProps = ({ packetTickets, filterItems, sortButtons, error, ticketsCounter }) => ({ packetTickets, filterItems, sortButtons, error, ticketsCounter })

TicketsList.defaultProps = {
  packetTickets:[],
  error: null
};

TicketsList.propTypes = {
  packetTickets: PropTypes.arrayOf(PropTypes.object),
  filterItems:PropTypes.arrayOf(PropTypes.object).isRequired,
  sortButtons:PropTypes.arrayOf(PropTypes.object).isRequired,
  error:PropTypes.object,
  ticketsCounter:PropTypes.number.isRequired,
  
};

export default connect(mapStateToProps)(TicketsList);

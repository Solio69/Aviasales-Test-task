/* eslint-disable dot-notation */
/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
/* eslint-disable use-isnan */
/* eslint-disable no-useless-return */
/* eslint-disable no-else-return */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
// import { getPacketTickets, updateSearchId } from '../../actions/index';
import styles from './TicketsList.module.scss';
import Ticket from '../Ticket';

const TicketsList = function (props) {
  const { packetTickets, filtersItem, firstPacketTickets, sortButtons } = props;

  // собирает значания выбранных фильтров в масиив
  const selectedFiltersArr = filtersItem.map((item) => item.isCheck ? Number(item.name): null).filter((el) => el !== null);

  // отфильтрованный масиив
  const filtration = packetTickets.filter((item) => {
    // кол-во пересадоку туда
    const transfersThere = item.segments[0].stops.length;
    // кол-во пересадоку обратно
    const transfersBack = item.segments[1].stops.length;
    // если в массиве выбранных фильтров есть значение равное количеству пеерсадок туда и обратно
    if (selectedFiltersArr.includes(transfersThere) && selectedFiltersArr.includes(transfersBack)) {
      return item; // вернет значение
    }
  });

  // возвращает отсортированный массив
  const sorting = (arr) => {
    // получает сроку с именем выбранной кнопки сортировки
    const sortValueStr = sortButtons.find((el) => el.isActive).name;

    // создает новый массив с новыми свойствами объекта
    const newArr = arr.map((el) => {
      // сумма минут перелаетов туда и обратно
      const sumMin = el.segments[0].duration + el.segments[1].duration;
      el.sumMin = sumMin; 
      // сумма минут и цены
      const sumMinAndPrace = el.sumMin + el.price;
      el.sumMinAndPrace = sumMinAndPrace; 
      return el;
    });

    // сортирует массив в зависимости от имени кнопки
    switch (sortValueStr) {
      case 'inexpensive':
        newArr.sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      case 'quick':
        newArr.sort((a, b) => (a.sumMin > b.sumMin ? 1 : -1));
        break;
      case 'optimal':
        newArr.sort((a, b) => (a.sumMinAndPrace > b.sumMinAndPrace ? 1 : -1));
        break;
      default:
        return [];
    }

    return newArr;
  };

  // получает отфильтрованный и отсортированный массив
  const content = sorting(filtration).map((item, i) => {
    if (i < props.ticketsCounter) {
      return <Ticket key={i} ticket={item} />;
    }
  });

  return <div className={styles['tickets-list']}>{content}</div>;
};

// redux props
const mapStateToProps = (response) => response;

export default connect(mapStateToProps)(TicketsList);

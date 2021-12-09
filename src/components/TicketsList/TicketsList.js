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
  const { filtersItem, firstPacketTickets } = props;
  // console.log(filtersItem, firstPacketTickets);
  // filtered tickets
  // sorted tickets

  // sorting

  // filtration

  // собирает значания выбранных фильтров в масиив
  const selectedFiltersArr = filtersItem
    .map((item) => {
      if (item.isCheck) {
        return Number(item.name);
      }
    })
    .filter((el) => el !== undefined);
  // console.log(selectedFiltersArr);

  // отфильтрованный масиив (ПОКА ПЕРВОЙ ПАРТИИ)
  const filtration = firstPacketTickets.filter((item) => {
    const transfersThere = item.segments[0].stops.length;
    const transfersBack = item.segments[1].stops.length;
    // если в массиве выбранных фильтров есть значение равное количеству пеерсадок туда и обратно
    if (selectedFiltersArr.includes(transfersThere) && selectedFiltersArr.includes(transfersBack)) {
      return item; // вернет значение
    }
  });


  const content = filtration.map((item, i) => {
    if (i < props.ticketsCounter) {
      return <Ticket key={i} ticket={item} />;
    }
  });

  return <div className={styles['tickets-list']}>{content}</div>;
};

// redux props
const mapStateToProps = (response) => response;

// // redux metods
// const mapDispathToProps = (dispatch) => ({
//   fetchGetTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),
//   fetchGetSearchId: (searchId) => dispatch(updateSearchId(searchId)),
// });

export default connect(mapStateToProps)(TicketsList);

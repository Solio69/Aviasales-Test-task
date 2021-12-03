/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPacketTickets } from '../../actions/index';
import styles from './TicketsList.module.scss';
import Ticket from '../Ticket';

import apiServise from '../../servises/ApiService';

class TicketsList extends Component {
  componentDidMount() {
    // searchId из localStorage
    const isSearchId = JSON.parse(localStorage.getItem('searchId'));

    // если есть
    if (!isSearchId) {
      // запускает гостевую сессию
      apiServise
        .getKey()
        .then((searchId) => {
          // сохраняет token в localStorage
          localStorage.setItem('searchId', JSON.stringify(searchId));
          return searchId;
        })
        .then((searchId) => {
          // получает билеты по searchId и сохраняет в store
          this.props.fetchGetPacketTickets(searchId);
        });
    } else {
      // берет searchId из localStorage, получает билеты и сохраняет в store
      this.props.fetchGetPacketTickets(isSearchId);
    }
  }

  render() {
    const content = this.props.packetTickets.map((item, i) => {
      if (i <= 4) {
        return <Ticket key={i} ticket={item} />;
      }
    });

    return <div className={styles['tickets-list']}>{content}</div>;
  }
}

// redux props
const mapStateToProps = (response) => response;

// redux metods
const mapDispathToProps = (dispatch) => ({
  fetchGetPacketTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),
});

export default connect(mapStateToProps, mapDispathToProps)(TicketsList);

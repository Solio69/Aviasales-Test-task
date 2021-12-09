/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.scss';
import { getPacketTickets, updateSearchId, ticketsError, updateFirstPacketTickets } from '../../actions/index';

// components
import Logo from '../Logo';
import Filters from '../Filters';
import SortButtons from '../SortButtons';
import TicketsList from '../TicketsList';
import Button from '../Button';
import Burger from '../Burger';
import apiServise from '../../servises/ApiService';

class App extends Component {
  componentDidMount() {
    apiServise
      .getKey() // получает searchId
      .then((searchId) => {
        // получает одну порцию билетов и записывает в store firstPacketTickets
        apiServise.getTickets(searchId).then((res) => {
          this.props.updateFirstPacketTickets(res.tickets);
        });

        return searchId;
      })
      .then((searchId) => {
        // сохраняет в redux searchId
        this.props.updateSearchId(searchId);
        // сохраняет в redux packetTickets
        this.props.getPacketTickets(searchId);
      })
      .catch((err) => {
        this.props.ticketsError(err);
      });
  }

  componentDidUpdate() {
    // если нет ошибки и не все билеты пока получены продолжает делать запрос
    if (this.props.error === null && this.props.isStop === false) {
      this.props.getPacketTickets(this.props.searchId);
    }
  }

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles['header__logo-wrapper']}>
            <Logo />
          </div>
          <div className={styles['header__burger-wrapper']}>
            <Burger />
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.main__content}>
            <div>
              <Filters />
            </div>
            <div>
              <div>
                <SortButtons />
              </div>
              <div>
                <TicketsList />
                <Button />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
// redux props
const mapStateToProps = (response) => response;

// redux metods
const mapDispathToProps = (dispatch) => ({
  getPacketTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),

  updateSearchId: (searchId) => dispatch(updateSearchId(searchId)),

  ticketsError: (error) => dispatch(ticketsError(error)),

  updateFirstPacketTickets: (firstPacketTickets) => dispatch(updateFirstPacketTickets(firstPacketTickets)),
});

export default connect(mapStateToProps, mapDispathToProps)(App);

/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './App.module.scss';
import { getPacketTickets, updateSearchId, ticketsError } from '../../actions/index';

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
        this.props.fetchGetSearchId(searchId); // сохраняет в redux searchId
        this.props.fetchGetTickets(searchId); // сохраняет в redux packetTickets
      })
      .catch((err) => {
        this.props.ticketsError(err);
      });
  }

  componentDidUpdate() {
    // если нет ошибки и не все билеты пока получены продолжает делать запрос
    if (this.props.error === null && this.props.isStop === false) {
      this.props.fetchGetTickets(this.props.searchId);
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
  fetchGetTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),
  fetchGetSearchId: (searchId) => dispatch(updateSearchId(searchId)),
  ticketsError: (error) => dispatch(ticketsError(error)),
});

export default connect(mapStateToProps, mapDispathToProps)(App);

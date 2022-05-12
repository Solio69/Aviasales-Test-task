/* eslint-disable no-shadow */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import styles from './App.module.scss';
import { getPacketTickets, updateSearchId, ticketsError } from '../../actions/index';

// components
import Logo from '../Logo';
import Filters from '../Filters';
import SortButtons from '../SortButtons';
import TicketsList from '../TicketsList';
import Loader from '../Loader';

import apiServise from '../../servises/ApiService';

class App extends Component {
  
  componentDidMount() {
    const {updateSearchId, getPacketTickets, ticketsError} = this.props
    apiServise
      .getKey()
      .then((searchId) => {
        // сохраняет в redux searchId
        updateSearchId(searchId);
        // сохраняет в redux packetTickets
        getPacketTickets(searchId);
      })
      .catch((err) => {
        ticketsError(err);
      });
  }

  componentDidUpdate(prevProps) {

    const {error, isStop, packetTickets, getPacketTickets, searchId}=this.props
    // если нет ошибки и не все билеты пока получены продолжает делать запрос
    if (
      prevProps.packetTickets !== packetTickets &&
      error === null &&
      isStop === false
    ) {
      getPacketTickets(searchId);
    }
  }

  render() {
    const {error}=this.props
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles['header__logo-wrapper']}>
            <Logo />
          </div>
        </header>
        <main className={styles.main}>
          {!error ? <Loader /> : null}
          <section className={styles['main__content-wrapper']}>
            <div>
              <Filters />
            </div>
            <div className={styles.main__content}>
              <div>
                <SortButtons />
              </div>
              <div>
                <TicketsList />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ error, isStop, searchId, packetTickets }) => ({error, isStop, searchId, packetTickets});

const mapDispathToProps = (dispatch) => ({
  getPacketTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),
  updateSearchId: (searchId) => dispatch(updateSearchId(searchId)),
  ticketsError: (error) => dispatch(ticketsError(error)),
});


App.defaultProps = {
  packetTickets: [],
  error:false,
  isStop:false,
  searchId: ''
};

App.propTypes = {
  packetTickets:PropTypes.arrayOf(PropTypes.object),
  updateSearchId:PropTypes.func.isRequired,
  getPacketTickets:PropTypes.func.isRequired,
  ticketsError:PropTypes.func.isRequired,
  error:PropTypes.bool,
  isStop:PropTypes.bool,
  searchId: PropTypes.string
};

export default connect(mapStateToProps, mapDispathToProps)(App);

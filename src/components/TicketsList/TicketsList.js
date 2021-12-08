/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getPacketTickets, updateSearchId } from '../../actions/index';
import styles from './TicketsList.module.scss';
import Ticket from '../Ticket';
import ErrorAlert from '../ErrorAlert';

class TicketsList extends Component {
  render() {
    const content = this.props.packetTickets.map((item, i) => {
      if (i < this.props.ticketsCounter) {
        return <Ticket key={i} ticket={item} />;
      }
    });

    return <div className={styles['tickets-list']}>{content}</div>;
  }
}

// redux props
const mapStateToProps = (response) => response;

// // redux metods
// const mapDispathToProps = (dispatch) => ({
//   fetchGetTickets: (packetTickets) => dispatch(getPacketTickets(packetTickets)),
//   fetchGetSearchId: (searchId) => dispatch(updateSearchId(searchId)),
// });

export default connect(mapStateToProps)(TicketsList);

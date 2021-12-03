/* eslint-disable prefer-destructuring */
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

// import { ReactReduxContext, createAction } from "react-redux";
import apiServise from '../servises/ApiService';

// обновляет данные о выбранной сортироке
const updateSortButtons = (newSortButtons) => {
  return {
    type: 'UPDATE_SORT_BUTTONS',
    payload: newSortButtons,
  };
};

// обновляет данные о выбранных фильрах
const updateFilters = (newFilters) => {
  return {
    type: 'UPDATE_FILTERS',
    payload: newFilters,
  };
};

// обновляет список билетов
const updatePacketTickets = (packetTickets) => {
  return {
    type: 'UPDATE_PACKET_TICKETS',
    payload: packetTickets,
  };
};

// получает билеты и сохраняет в store
const getPacketTickets = (searchId) => {
  return (dispatch) => {
    // получает билеты
    apiServise.getTickets(searchId).then((res) => {
      // сохраняет в store
      // console.log(res)
      dispatch(updatePacketTickets(res.tickets));
    });
  };
};

export { updateSortButtons, updateFilters, getPacketTickets };

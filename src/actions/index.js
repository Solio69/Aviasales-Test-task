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

// обновляет searchId
const updateSearchId = (searchId) => {
  return {
    type: 'UPDATE_SEARCH_ID',
    payload: searchId,
  };
};

// записывает первую порцию билетов в store
// const updateFirstPacketTickets = (firstPacketTickets) => {
//   return {
//     type: 'UPDATE_FIRST_PACKET_TICKETS',
//     payload: firstPacketTickets,
//   };
// };

// обновляет список билетов
const updatePacketTickets = (packetTickets) => {
  return {
    type: 'UPDATE_PACKET_TICKETS',
    payload: packetTickets,
  };
};

// обновляет количество показываемых билетов
const updateTicketsCounter = (newCounter) => {
  return {
    type: 'UPDATE_TICKETS_COUNTER',
    payload: newCounter,
  };
};

// переключает isStop в true по окончании загрузки всех блилетов
const toggleStop = (booleanValue) => {
  return {
    type: 'TOGGLE_STOP',
    payload: booleanValue,
  };
};

// обновляет поле error
const ticketsError = (error) => {
  return {
    type: 'TICKETS_ERROR',
    payload: error,
  };
};

// получает билеты и сохраняет в store
const getPacketTickets = (searchId) => {
  return (dispatch) => {
    // получает билеты
    apiServise.getTickets(searchId).then((res) => {
      // console.log(res);
      // сохраняет билеты в store
      dispatch(updatePacketTickets(res.tickets));
      // если от сервера пришло, что stops: true обновляет isStop
      if (res.stop) {
        dispatch(toggleStop(res.stop));
      }
    });
  };
};

export {
  updateSortButtons,
  updateFilters,
  // updateFirstPacketTickets,
  getPacketTickets,
  updateSearchId,
  updateTicketsCounter,
  toggleStop,
  ticketsError,
};

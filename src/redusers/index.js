/* eslint-disable default-param-last */

const initialState = {
  sortButtons: [
    { name: 'inexpensive', label: 'Самый дешевый', isActive: true },
    { name: 'quick', label: 'Самый быстрый', isActive: false },
    { name: 'optimal', label: 'Оптимальный', isActive: false },
  ],

  filtersItem: [
    { label: 'Все', name: 'all', isCheck: false },
    { label: 'Без пересадок', name: '0', isCheck: false },
    { label: '1 пересадка', name: '1', isCheck: false },
    { label: '2 пересадки', name: '2', isCheck: false },
    { label: '3 пересадки', name: '3', isCheck: false },
  ],

  searchId: '',

  // firstPacketTickets: [],

  packetTickets: [],

  ticketsCounter: 5,

  isStop: false,

  error: null,
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SORT_BUTTONS':
      return {
        ...state,
        sortButtons: action.payload,
      };

    case 'UPDATE_FILTERS':
      return {
        ...state,
        filtersItem: action.payload,
      };

    case 'UPDATE_SEARCH_ID':
      return {
        ...state,
        searchId: action.payload,
      };

    // case 'UPDATE_FIRST_PACKET_TICKETS':
    //   return {
    //     ...state,
    //     firstPacketTickets: action.payload,
    //   };

    case 'UPDATE_PACKET_TICKETS':
      return {
        ...state,
        packetTickets: [...state.packetTickets, ...action.payload],
      };

    case 'UPDATE_TICKETS_COUNTER':
      return {
        ...state,
        ticketsCounter: action.payload,
      };

    case 'TOGGLE_STOP':
      return {
        ...state,
        isStop: action.payload,
      };

    case 'TICKETS_ERROR':
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reduser;

/* eslint-disable default-param-last */

const initialState = {
  sortButtons: [
    { name: 'inexpensive', label: 'Самый дешевый', isActive: true },
    { name: 'quick', label: 'Самый быстрый', isActive: false },
    { name: 'optimal', label: 'Оптимальный', isActive: false },
  ],

  filtersItem: [
    { label: 'Все', name: 'all', isCheck: false },
    { label: 'Без пересадок', name: 'no transfers', isCheck: false },
    { label: '1 пересадка', name: '1 transfer', isCheck: false },
    { label: '2 пересадки', name: '2 transfer', isCheck: false },
    { label: '3 пересадки', name: '3 transfer', isCheck: false },
  ],

  packetTickets: [],
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

    case 'UPDATE_PACKET_TICKETS':
      return {
        ...state,
        packetTickets: action.payload,
      };

    default:
      return state;
  }
};

export default reduser;

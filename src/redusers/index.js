/* eslint-disable default-param-last */

const initialState = {

  sortButtons: [
  { name: 'inexpensive', label: 'Самый дешевый', isActive: false },
  { name: 'quick', label: 'Самый быстрый', isActive: false  },
  { name: 'optimal', label: 'Оптимальный', isActive: false  }
  ]
};

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SORT_BUTTONS':
      return {
        sortButtons: action.payload,
      };
    default:
      return state;
  }
};

export default reduser;

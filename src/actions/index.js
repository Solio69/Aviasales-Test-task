/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

const updateSortButtons = (newSortButtons) => {
  return {
    type: 'UPDATE_SORT_BUTTONS',
    payload: newSortButtons,
  };
};

export {updateSortButtons};

/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import styles from './SortButtons.module.scss';

const SortButtons = function (props) {
  const { sortButtons, updateSortButtons } = props;
  // console.log(props)

  // получает sortButtons из store и отрисовывает на стрнице
  const buttons = sortButtons.map(({ name, label, isActive }) => {
    let className;

    // если isActive элемента true, то присваивает active класс
    if (isActive) {
      className = styles.active;
    }

    // обрабатывает клик по элементу
    const onClick = () => {
      const newArr = [...sortButtons].map((el) => {
        if (el.name === name) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
        return el;
      });
      // вызывет экшен updateSortButtons и передает новый масиив
      updateSortButtons(newArr);
    };

    return (
      <div key={name} onClick={onClick} className={className}>
        {label}
      </div>
    );
  });

  return <div className={styles['sort-buttons']}>{buttons}</div>;
};

// redux props
const mapStateToProps = (sortButtons) => {
  return sortButtons;
};

// redux metods
const mapDispathToProps = (dispatch) => {
  return {
    // обновление масиива с состоянием кномпок сортировкм
    updateSortButtons: (newSortButtons) => {
      dispatch({
        type: 'UPDATE_SORT_BUTTONS',
        payload: newSortButtons,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(SortButtons);

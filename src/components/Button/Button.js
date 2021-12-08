/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable operator-assignment */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { updateTicketsCounter } from '../../actions/index';
import styles from './Button.module.scss';
import ErrorAlert from '../ErrorAlert';

const Button = function (props) {
  // console.log(props);

  // прибавляет 5 билетов к ticketsCounter в state
  const onClick = () => {
    const count = props.ticketsCounter + 5;
    props.updateTicketsCounter(count);
  };

  // кнопка не отображается если есть ошибка 
  const button = !props.error ? (
    <div className={styles['button-show-more__wrapper']}>
      <button type="button" onClick={onClick}>
        Показать еще 5 билетов!
      </button>
    </div>
  ) : null;

  // отображается ошибка
  const errorShow = props.error ? <ErrorAlert /> : null;

  return (
    <React.Fragment>
      {button}
      {errorShow}
    </React.Fragment>
  );
};

// redux props
const mapStateToProps = (response) => response;

// redux metods
const mapDispathToProps = (dispatch) => {
  return {
    updateTicketsCounter: (newCounter) => dispatch(updateTicketsCounter(newCounter)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Button);

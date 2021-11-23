/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import styles from './SortButtons.module.scss';


const SortButtons = function (props) {
  const { sortButtons } = props;
  console.log(props)
  console.log(sortButtons)


  const tabs = sortButtons.map(({ name, label }) => {

    return (
      <div key={name}>
        {label}
      </div>
    );
  });
  
  return <div className={styles.tabs}>{tabs}</div>;
};
const mapStateToProps =(sortButtons)=>{
  return sortButtons
}


export default connect(mapStateToProps)(SortButtons);

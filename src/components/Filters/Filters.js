/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import styles from './Filters.module.scss';

const Filters = function (props) {
  const { filtersItem, updateFilters } = props;

  // счетчик выбранных фильтров
  let countSelectedFilters = 0;

  // рендерит фильтры на страницу
  const filters = [...filtersItem].map(({ label, name, isCheck }) => {
    // если фильтр зачекан isCheck = true увеличивает счетчик
    if (isCheck) {
      countSelectedFilters++;
    }

    // следит за изменением чекбоксов
    const onChange = (event) => {
      // новый массив фиьтров который будет изменяться в зависимости от условия
      let newArrFilters = [...filtersItem];

      // Если включается галочка "Все" - проставляются галочки всем остальным фильтрам
      if (name === 'all' && isCheck === false) {
        newArrFilters.map((el) => {
          el.isCheck = true;
          return el;
        });
      }

      // Если снимается галочка "Все" - снимаются все остальные фильтры
      if (name === 'all' && isCheck === true) {
        newArrFilters.map((el) => {
          el.isCheck = false;
          return el;
        });
      }

      // Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
      if (name !== 'all') {
        // если выбран фильтр не "Все", то просто меняет фильтру isCheck на event.target.checked
        newArrFilters.map((el) => {
          if (el.name === name) {
            el.isCheck = event.target.checked;
            if (!event.target.checked) {
              countSelectedFilters--; // !но если это false, то счетчик уменьшается
            }
          }
          // галочка с фильтра "Все" снимается
          if (el.name === 'all') {
            el.isCheck = false;
          }
          return el;
        });
      }

      // Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
      if (countSelectedFilters === 3 && name !== 'all') {
        // если уже выбраны 3 фильтра, то при выборе следующего (последнего не 'all') галочки проставляются всем
        newArrFilters.map((el) => {
          el.isCheck = true;
          return el;
        });
      }

      // вызов экшена для изменения состояния фильтров в store redux
      updateFilters(newArrFilters);
    };

    return (
      <li key={name}>
        <label className={styles['checkbox-label']}>
          <input type="checkbox" className={styles['checkbox-input']} checked={isCheck} onChange={onChange} />
          <span className={styles['check-box']} />
          {label}
        </label>
      </li>
    );
  });

  return (
    <div className={styles.filters}>
      <div>Количество пересадок</div>
      <ul>{filters}</ul>
    </div>
  );
};

// redux props
const mapStateToProps = (filtersItem) => {
  return filtersItem;
};

// redux metods
const mapDispathToProps = (dispatch) => {
  return {
    updateFilters: (newFilters) => {
      dispatch({
        type: 'UPDATE_FILTERS',
        payload: newFilters,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Filters);


import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-top-loading-bar';

import styles from './Loader.module.scss';

const Loader = function(props) {
  const { isStop, packetTickets } = props;
  // подпись к лоадеру
  const [loaderLabel, setLoaderLabel] = useState('Загружаем билеты...');
  // значение лоадера
  const [count, setCount] = useState(0);

  // пока не все данные получены (isStop-true)
  useEffect(() => {
    if (!isStop) {
      setCount(count + 4); // добавляет к значению лоадера 4
    } else {
      setCount(100); // когда получены переводит значениев 100
    }
    // следит за packetTickets что бы был видна динамика
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStop, packetTickets]);

  const onLoaderFinished = () => {
    setLoaderLabel(null); // после заргузки убирает подпись
  };

  return (
    <div className={styles['loader-wrapper']}>
      <LoadingBar
        containerClassName={styles.loader}
        height="6px"
        color="#2196F3"
        progress={count}
        shadow={false}
        onLoaderFinished={onLoaderFinished}
      />
      <span>{loaderLabel}</span>
    </div>
  );
}

const mapStateToProps = ({ isStop, packetTickets }) => ({ isStop, packetTickets })

Loader.defaultProps = {
  packetTickets:[],
};

Loader.propTypes = {
  isStop: PropTypes.bool.isRequired,
  packetTickets:PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Loader);

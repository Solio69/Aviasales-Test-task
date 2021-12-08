/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import styles from './Ticket.module.scss';

const Ticket = function (props) {
  const { ticket, filtersItem } = props;
  const { price, carrier, segments } = ticket;

  // туда
  const routeThere = segments[0];
  // обратно
  const routeBack = segments[1];

  // вернет строку с количеством пеерсадок (берет ее из label элементов фильтра)
  const transfersStr = (num, arr) => {
    switch (num) {
      case 0:
        return arr.find((el) => el.name === 'no transfers').label;
      case 1:
        return arr.find((el) => el.name === '1 transfer').label;
      case 2:
        return arr.find((el) => el.name === '2 transfer').label;
      case 3:
        return arr.find((el) => el.name === '3 transfer').label;
      default:
        return '';
    }
  };

  // сколько пеерсадок туда
  const howManyTransfersThere = transfersStr(routeThere.stops.length, filtersItem);
  // сколько пеерсадок обратно
  const howManyTransfersBack = transfersStr(routeBack.stops.length, filtersItem);

  // создает новую дату с временем прибытия
  const createArrivalData = (data1, minutes) => {
    const date2 = new Date(data1);
    date2.setMinutes(date2.getMinutes() + minutes);
    return date2;
  };

  // дата и время отбытия туда
  const departureDataThere = new Date(routeThere.date);

  // дата и время прибытия туда
  const arrivalDataThere = createArrivalData(departureDataThere, routeThere.duration);

  // дата и время отбытия туда
  const departureDataBack = new Date(routeBack.date);

  // дата и время прибытия туда
  const arrivalDataBack = createArrivalData(departureDataBack, routeBack.duration);

  // форматирует время из даты в строку, подставляет 0 или 00 в зависимости от длины строки
  const createTimeString = (data) => {
    const arrStrs = [String(data.getHours()), String(data.getMinutes())].map((el) => {
      if (el.length === 2) {
        return el;
      } else if (el.length === 1) {
        return '0' + el;
      } else if (el.length === 0) {
        return '00' + el;
      }
    });
    return arrStrs.join(':');
  };

  // отформатированное время отправления туда
  const departureTimeThere = createTimeString(departureDataThere);
  // отформатированное время прибытия туда
  const arrivalTimeThere = createTimeString(arrivalDataThere);

  // отформатированное время отправления обратно
  const departureTimeBack = createTimeString(departureDataBack);
  // отформатированное время прибытия обратно
  const arrivalTimeBack = createTimeString(arrivalDataBack);

  // вернет отформатированную строку со временем в пути
  const travelTimeStr = (time) => {
    let strTime = '';
    const hours = (time / 60) ^ 0;

    if (hours) {
      let minutes = time % 60;
      if (minutes < 10) minutes = `0${minutes}`;
      strTime = `${hours}ч ${minutes}м`;
    } else {
      strTime = `${time}м`;
    }
    return strTime;
  };

  // время в пути туда
  const travelTimeThere = travelTimeStr(routeThere.duration);
  // время в пути обратно
  const travelTimeBack = travelTimeStr(routeBack.duration);

  // строка с кодами городов с пересадками туда
  const codesTransfersThereStr = routeThere.stops.join(', ');
  // строка с кодами городов с пересаками обратно
  const codesTransfersBackStr = routeBack.stops.join(', ');

  // отформатированная строка цены с пробелом после каждого 3го символа с конца
  const formPrise = (num) => String(num).replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

  // отформатированный прайс
  const strPrise = formPrise(price);

  // картика авиокомпании
  const logo = `//pics.avs.io/99/36/${carrier}.png`;

  return (
    <div className={styles.ticket}>
      <div className={styles['ticket-header']}>
        <div className={styles['ticket-header__prise']}>{strPrise} р</div>
        <div className={styles['ticket-header__logo']}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={styles['ticket-content']}>
        <div className={styles['ticket-content__column']}>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>
              {routeThere.destination} – {routeThere.origin}
            </div>
            <div className={styles['ticket-content__text']}>
              {departureTimeThere}-{arrivalTimeThere}
            </div>
          </div>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>
              {routeBack.destination} – {routeBack.origin}
            </div>
            <div className={styles['ticket-content__text']}>
              {departureTimeBack}-{arrivalTimeBack}
            </div>
          </div>
        </div>
        <div className={styles['ticket-content__column']}>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>в пути</div>
            <div className={styles['ticket-content__text']}>{travelTimeThere}</div>
          </div>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>в пути</div>
            <div className={styles['ticket-content__text']}>{travelTimeBack}</div>
          </div>
        </div>
        <div className={styles['ticket-content__column']}>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>{howManyTransfersThere}</div>
            <div className={styles['ticket-content__text']}>{codesTransfersThereStr}</div>
          </div>
          <div className={styles['ticket-content__column__inner-wrapper']}>
            <div className={styles['ticket-content__title']}>{howManyTransfersBack}</div>
            <div className={styles['ticket-content__text']}>{codesTransfersBackStr}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (response) => response;

export default connect(mapStateToProps)(Ticket);

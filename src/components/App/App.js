/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import React, { Component } from 'react';

import styles from './App.module.scss';

// components
import Logo from '../Logo';
import Filters from '../Filters';
import SortButtons from '../SortButtons';
import TicketsList from '../TicketsList';
import Button from '../Button';
import Burger from '../Burger';

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <div className={styles['header__logo-wrapper']}>
            <Logo />
          </div>
          <div className={styles['header__burger-wrapper']}>
            <Burger />
          </div>
        </header>
        <main className={styles.main}>
          <section className={styles.main__content}>
            <div>
              <Filters />
            </div>
            <div>
              <div>
                <SortButtons />
              </div>
              <div>
                <TicketsList />
                <Button />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

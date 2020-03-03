import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/123abc`} activeClassName="active">
        Waiter/order/123abc
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName="active">
        Waiter/order/new
      </Link>
    </div>
  </div>
);

export default Waiter;
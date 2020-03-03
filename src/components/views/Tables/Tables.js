import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} activeClassName="active">
        Tables/booking/123abc
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName="active">
        Tables/booking/new
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/123abd`} activeClassName="active">
        Tables/events/123abc
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName="active">
        Tables/booking/new
      </Link>
    </div>
  </div>
);

export default Tables;
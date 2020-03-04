import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/123abc`} className="active">
        Tables/booking/123abc
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className="active">
        Tables/booking/new
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/123abd`} className="active">
        Tables/events/123abc
      </Link>
    </div>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className="active">
        Tables/booking/new
      </Link>
    </div>
  </div>
);

export default Tables;
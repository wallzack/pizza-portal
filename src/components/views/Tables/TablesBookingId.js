import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesBookingId = ({ match }) => (
  <div className={styles.component}>
    <h2>TablesBookingId view</h2>
    <span>{match.params.id}</span>
  </div>
);

TablesBookingId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default TablesBookingId;
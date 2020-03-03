import React from 'react';
import styles from './Waiter.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderId = ({ match }) => (
  <div className={styles.component}>
    <h2>WaiterOrderId view</h2>
    <span>{match.params.id}</span>
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default WaiterOrderId;
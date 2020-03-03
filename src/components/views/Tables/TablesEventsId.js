import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';

const TablesEventsId = ({ match }) => (
  <div className={styles.component}>
    <h2>TablesEventsId view</h2>
    <span>{match.params.id}</span>
  </div>
);

TablesEventsId.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default TablesEventsId;
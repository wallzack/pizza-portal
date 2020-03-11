import React from 'react';
import styles from './Dashboard.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tables from '../Tables/Tables';
import Waiter from '../Waiter/WaiterContainer';

const Dashboard = () => {
  // eslint-disable-next-line quotes
  const ordersHeader = "List of today's orders:";
  // eslint-disable-next-line quotes
  const tablesHeader = "List of today's events and reservations:";

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography className={styles.header} variant="h5">
            {ordersHeader}
          </Typography>
        </Toolbar>
      </AppBar>
      <Waiter />
      <div className={styles.tables}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={styles.header} variant="h5">
              {tablesHeader}
            </Typography>
          </Toolbar>
        </AppBar>
        <Tables />
      </div>
    </>
  );
};

export default Dashboard;
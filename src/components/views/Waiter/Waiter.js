import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// const demoContent = [
//   { id: '1', status: 'free', order: null },
//   { id: '2', status: 'thinking', order: null },
//   { id: '3', status: 'ordered', order: 123 },
//   { id: '4', status: 'prepared', order: 234 },
//   { id: '5', status: 'delivered', order: 345 },
//   { id: '6', status: 'paid', order: 456 },
// ];

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOf([PropTypes.bool,PropTypes.string]),
    }),
    tables: PropTypes.object,
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(status) {
    switch (status) {
      case 'free':
        return (
          <div className={styles.buttons}>
            <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              Thinking
            </Button>
            <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              New order
            </Button>
          </div>
        );
      case 'thinking':
        return (
          <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
            New order
          </Button>
        );
      case 'ordered':
        return (
          <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Prepared
          </Button>
        );
      case 'prepared':
        return (
          <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Delivered
          </Button>
        );
      case 'delivered':
        return (
          <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Paid
          </Button>
        );
      case 'paid':
        return (
          <Button className={styles.buttons} component={Link} variant="contained" color="primary" to={`${process.env.PUBLIC_URL}/waiter/order/123abc`}>
            Free
          </Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.order && <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>{row.order}</Button>}</TableCell>
                  <TableCell>{this.renderActions(row.status)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}
export default Waiter;
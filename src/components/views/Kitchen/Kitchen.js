import React from 'react';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './Kitchen.module.scss';

const demoContent = [
  { id: 1, tableOrder: '1', order: ['pizza', 'coffee'], status: 'ordered' },
  { id: 2, tableOrder: '2', order: ['salad', 'pizza'], status: 'done' },
  { id: 3, tableOrder: '123ac', order: ['pizza', 'coffee'], status: 'ready' },
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <>
          <Button>Ready</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Container maxWidth='lg'>
      <Toolbar />
      <Paper className={styles.component}>
        <h2>Kitchen view</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>OrderId</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>TableNo or OrderNo</TableCell>
              <TableCell>Order details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.tableOrder}</TableCell>
                <TableCell>{row.order.join(', ')}</TableCell>
                <TableCell>{renderActions(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Kitchen;
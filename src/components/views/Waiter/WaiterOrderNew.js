import React from 'react';
import styles from './Waiter.module.scss';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const WaiterOrderNew = () => {
  const menu = [
    {
      id: 1,
      meal: 'pizza',
      price: '$20',
      options: ['cheese', 'tomatoes', 'oregano', 'salami'],
    },
    {
      id: 2,
      meal: 'dinner',
      price: '$30',
      options: ['pork chop', 'steak', 'dumplings', 'rotisserie chicken'],
    },
    {
      id: 3,
      meal: 'soup',
      price: '$10',
      options: ['broth', 'tripe', 'tomato soup', 'stew'],
    },
    {
      id: 4,
      price: '$10',
      meal: 'salad',
      options: ['horiatiki', 'mexican salad', 'fruit salad', 'seafood salad'],
    },
  ];

  const order = [
    {
      id: 1,
      meal: 'pizza',
      price: '$20',
      options: ['cheese', 'tomatoes', 'oregano'],
    },
    {
      id: 2,
      meal: 'dinner',
      price: '$30',
      options: ['rotisserie chicken'],
    },
  ];

  const [table, setTable] = React.useState('');

  const tableHandler = event => {
    console.log(event.target);
    setTable(event.target.value);
  };
  return (
    <div className={styles.component}>
      <h2 className={styles.header}>Make new order:</h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <Paper className={styles.paper}>
            <h3>Choose table:</h3>
            <FormControl className={styles.dropdown}>
              <InputLabel id="demo-simple-select-label">Table:</InputLabel>
              <Select labelId="demo-simple-select-label" value={table} onChange={tableHandler}>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
            <h3>Order details:</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Meal</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell className={styles.optionsHeader}>Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {order.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.meal}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <div>
                        {row.options.map(option => (
                          <p key={option}>{option}</p>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h3>Order amount:</h3>
            <p>$20</p>
          </Paper>
        </div>
        <div className={styles.column}>
          <Paper className={styles.paper}>
            <h3>Menu</h3>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Meal</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell className={styles.optionsHeader}>Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.meal}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>
                      <FormControl className={styles.dropdown}>
                        <InputLabel id="demo-simple-select-label">Options...</InputLabel>
                        <Select labelId="demo-simple-select-label">
                          {row.options.map(option => (
                            <MenuItem key={option} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default WaiterOrderNew;
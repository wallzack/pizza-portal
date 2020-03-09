import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const Kitchen = () => {
  const meals = [
    {
      id: 1,
      table: 1,
      meal: 'pizza',
      options: ['cheese', 'tomatoes', 'oregano'],
    },
    {
      id: 2,
      table: 4,
      meal: 'dinner',
      options: ['rotisserie chicken'],
    },
  ];

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div className={styles.component}>
      <div>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Table</TableCell>
                  <TableCell>Meal</TableCell>
                  <TableCell>Options</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {meals.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.table}</TableCell>
                    <TableCell>{row.meal}</TableCell>
                    <TableCell>
                      <div>
                        {row.options.map(option => (
                          <p key={option}>{option}</p>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Checkbox checked={null} onChange={handleChange} value="primary" inputProps={{ 'aria-label': 'primary checkbox' }} />
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

export default Kitchen;
import React from 'react';
import styles from './Tables.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import DatePicker from '../../common/DatePicker/DatePicker';

const TablesEventsNew = () => {
  const [table, setTable] = React.useState('');

  const tableHandler = event => {
    console.log(event.target);
    setTable(event.target.value);
  };

  const demoStarters = ['water', 'snacks', 'cheese'];

  const [checked, setChecked] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleCheckboxChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <div className={styles.component}>
      <h2>New event</h2>
      <DatePicker />
      <form noValidate autoComplete="off">
        <TextField className={styles.textField} label="First name" />
        <TextField className={styles.textField} label="Last name" />
      </form>
      <FormControl className={styles.dropdown}>
        <InputLabel id="demo-simple-select-label">Table:</InputLabel>
        <Select labelId="demo-simple-select-label" value={table} onChange={tableHandler}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
      <FormGroup className={styles.textField}>
        <div>
          <InputLabel id="demo-simple-select-label">Starters:</InputLabel>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.checkedA}
                onChange={handleCheckboxChange('checkedA')}
                value={demoStarters[0]}
                color="primary"
              />
            }
            label={demoStarters[0]}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.checkedB}
                onChange={handleCheckboxChange('checkedB')}
                value={demoStarters[1]}
                color="primary"
              />
            }
            label={demoStarters[1]}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked.checkedC}
                onChange={handleCheckboxChange('checkedC')}
                value={demoStarters[2]}
                color="primary"
              />
            }
            label={demoStarters[2]}
          />
        </div>
      </FormGroup>

      <div>
        <Button variant="contained" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/`}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TablesEventsNew;

import React from 'react';
import styles from './PageNav.module.scss';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const PageNav = () => (
  <nav className={styles.component}>
    <Button className={styles.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">Dashboard</Button>
    <Button className={styles.link} component={NavLink} to={`${process.env.PUBLIC_URL}/`} activeClassName="active">Login</Button>
    {/* <div>
      <NavLink className={styles.link} exact to={`${process.env.PUBLIC_URL}/`} activeClassName="active">
        Homepage
      </NavLink>
    </div>
    <div>
      <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/login`} activeClassName="active">
        Login
      </NavLink>
    </div>
    <div>
      <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/tables`} activeClassName="active">
        Tables
      </NavLink>
    </div>
    <div>
      <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName="active">
        Waiter
      </NavLink>
    </div>
    <div>
      <NavLink className={styles.link} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName="active">
        Kitchen
      </NavLink>
    </div> */}
  </nav>
);


export default PageNav;
import React from "react";
import { Link } from "react-router-dom";
import classes from './Navigation.module.css'

export class Navigation extends React.Component {
  render() {
    return <header className={classes.header}>
      <div className={classes.logo}>Mini Meetups</div>
      <ul>
        <li>
          <Link to='/'>All Meetups</Link>
        </li>
        <li>
          <Link to='/new-meetup'>New Meetup</Link>
        </li>
        <li>
          <Link to='/favorites'>Favorites</Link>
        </li>
      </ul>
    </header>
  }
}
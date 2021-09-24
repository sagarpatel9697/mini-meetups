import React from "react";
import classes from "./Layout.module.css";
import { Navigation } from "./Navigation";

export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <main className={classes.main}>{this.props.children}</main>
      </div>
    );
  }
}

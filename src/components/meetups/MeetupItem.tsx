import React from "react";
import { Card } from "../ui/Card";
import classes from "./MeetupItem.module.css";

type MeetupItemProps = {
  id: number;
  image: string;
  title: string;
  address: string;
  description: string;
};

export class MeetupItem extends React.Component<MeetupItemProps> {
  render() {
    return (
      <li key={this.props.id} className={classes.item}>
        <Card>
          <div className={classes.image}>
            <img src={this.props.image} alt={this.props.title} />
          </div>
          <div className={classes.content}>
            <h3>{this.props.title}</h3>
            <address>{this.props.address}</address>
            <p>{this.props.description}</p>
          </div>
          <div className={classes.actions}>
            <button>To Favorites</button>
          </div>
        </Card>
      </li>
    );
  }
}

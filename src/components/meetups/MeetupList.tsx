import React from "react";
import { MeetupItem } from "./MeetupItem";
import classes from './MeetupList.module.css';

type MeetupListProps = {
  meetups: {
    id: number,
    title: string,
    image: string,
    address: string,
    description: string
  }[]
}
export class MeetupList extends React.Component<MeetupListProps> {
  render() {
    return <ul className={classes.list}>
      {this.props.meetups.map(meetup => (
      <MeetupItem 
        key={meetup.id}
        id={meetup.id}
        title={meetup.title}
        image={meetup.image}
        address={meetup.address}
        description={meetup.description}
      /
      >))}
    </ul>
  }
}
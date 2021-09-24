import React from "react";
import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export class NewMeetup extends React.Component {
  newMeetupHandler(meetup: object) {
    console.log(meetup);
  }

  render() {
    return (
      <section>
        <h1>New Meetup</h1>
        <NewMeetupForm onSubmitMeetup={this.newMeetupHandler} />
      </section>
    );
  }
}

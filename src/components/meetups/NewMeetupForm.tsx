import React from "react";
import { Card } from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

type MeetupData = {
  title: string;
  image: string;
  address: string;
  description: string;
};

type NewMeetupFormProps = {
  onSubmitMeetup: (meetup: MeetupData) => void;
};

export class NewMeetupForm extends React.Component<NewMeetupFormProps> {
  submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      image: { value: string };
      address: { value: string };
      description: { value: string };
    };
    const title = target.title.value;
    const image = target.image.value;
    const address = target.address.value;
    const description = target.description.value;

    this.props.onSubmitMeetup({
      title: title,
      image: image,
      address: address,
      description: description,
    });
  }

  render() {
    return (
      <Card>
        <form className={classes.form} onSubmit={this.submitHandler.bind(this)}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input type="text" required id="title" />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Image</label>
            <input type="url" required id="image" />
          </div>
          <div className={classes.control}>
            <label htmlFor="address">Address</label>
            <input type="text" required id="address" />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea id="description" required></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );
  }
}

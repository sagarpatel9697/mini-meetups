import React from "react";
import { Route, Switch } from "react-router-dom";
import { Navigation } from "./components/layout/Navigation";
import { FavoriteMeetups } from "./pages/FavoriteMeetups";
import { Meetups } from "./pages/Meetups";
import { NewMeetup } from "./pages/NewMeetup";

type AppProps = {};
export class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Meetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favorites">
            <FavoriteMeetups />
          </Route>
        </Switch>
      </div>
    );
  }
}

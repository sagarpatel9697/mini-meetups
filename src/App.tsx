import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Navigation } from "./components/layout/Navigation";
import { FavoriteMeetups } from "./pages/FavoriteMeetups";
import { Meetups } from "./pages/Meetups";
import { NewMeetup } from "./pages/NewMeetup";

type AppProps = {};
export class App extends React.Component<AppProps> {
  render() {
    return (
      <Layout>
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
      </Layout>
    );
  }
}

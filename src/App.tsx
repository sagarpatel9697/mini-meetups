import React from "react";
import { Todo } from "./components/Todo";

type AppProps = {};
export class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        <h1>My ToDo</h1>
        <Todo title="Learn React TSX" />
      </div>
    );
  }
}

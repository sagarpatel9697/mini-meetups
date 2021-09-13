import React from "react";
import { Backdrop } from "./components/Backdrop";
import { Modal } from "./components/Modal";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My ToDo</h1>
      <Todo title="Learn React TSX" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;

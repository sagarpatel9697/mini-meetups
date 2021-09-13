import React from "react";

type ModalProps = {};
export class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt">Cancel</button>
        <button className="btn">Confirm</button>
      </div>
    );
  }
}

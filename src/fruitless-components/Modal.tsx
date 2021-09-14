import React from "react";

type ModalProps = {
  onCancel: () => void;
  onConfirm: () => void;
};
export class Modal extends React.Component<ModalProps> {
  render() {
    return (
      <div className="modal">
        <p>Are you sure?</p>
        <button className="btn btn--alt" onClick={this.props.onCancel}>
          Cancel
        </button>
        <button className="btn" onClick={this.props.onConfirm}>
          Confirm
        </button>
      </div>
    );
  }
}

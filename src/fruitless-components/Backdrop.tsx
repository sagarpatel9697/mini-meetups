import React from "react";
type BackdropProps = {
  closeModal: () => void;
};
export class Backdrop extends React.Component<BackdropProps> {
  render() {
    return <div className="backdrop" onClick={this.props.closeModal} />;
  }
}

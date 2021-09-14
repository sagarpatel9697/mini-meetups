import React from "react";
import { Backdrop } from "./Backdrop";
import { Modal } from "./Modal";

type TodoProps = {
  title: string;
  subTitle?: string;
};

type TodoStates = {
  isModalOpen: boolean;
};

export class Todo extends React.Component<TodoProps, TodoStates> {
  state = { isModalOpen: false };

  openDeleteModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModalHandler = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        {this.props.subTitle && <p>{this.props.subTitle}</p>}
        <div className="actions">
          <button className="btn" onClick={this.openDeleteModal}>
            DELETE
          </button>
        </div>
        {this.state.isModalOpen && (
          <Modal onCancel={this.closeModalHandler} onConfirm={() => {}} />
        )}
        {this.state.isModalOpen && (
          <Backdrop closeModal={this.closeModalHandler} />
        )}
      </div>
    );
  }
}

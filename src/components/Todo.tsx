import React from "react";

type TodoProps = {
  title: string;
  subTitle?: string;
};

export class Todo extends React.Component<TodoProps> {
  handleDelete() {
    console.log(this.props.title);
  }

  render() {
    return (
      <div className="card">
        <h2>{this.props.title}</h2>
        {this.props.subTitle && <p>{this.props.subTitle}</p>}
        <div className="actions">
          <button className="btn" onClick={this.handleDelete}>
            DELETE
          </button>
        </div>
      </div>
    );
  }
}

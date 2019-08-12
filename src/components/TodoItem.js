import React from "react";

// function TodoItem(props) {
//     return (
//         <div className="todo-item">
//             <input type="checkbox" checked={props.item.completed} />
//             <p>{props.item.todo}</p>
//         </div>
//     );
// }

class TodoItem extends React.Component {
  render() {

    let styling = this.props.item.completed
      ? {
        textDecoration: "line-through",
        color: "lightgray",
        fontStyle: "italic"
      }
      : {};


    return (
      <div className="todo-item">
        <input
          id={this.props.item.id}
          type="checkbox"
          checked={this.props.item.completed}
          onChange={ () => this.props.handleChange(this.props.item.id)}
        />
        <label htmlFor={this.props.item.id} style={styling}>{this.props.item.todo}</label>
      </div>
    );
  }
}

export default TodoItem;
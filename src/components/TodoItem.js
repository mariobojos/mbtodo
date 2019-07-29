import React from "react";

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" value={props.item.completed} />
            <p>{props.item.todo}</p>
        </div>
    );
}

export default TodoItem;
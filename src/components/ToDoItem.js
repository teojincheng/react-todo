import React from "react";
import "./ToDoItem.css";
const ToDoItem = ({ name, isDone, toggleTodo, toggleRemove }) => (
  <div className="todo-item">
    <div className="todo-item__is-done" onClick={toggleTodo}>
      {isDone && (
        <img
          src={process.env.PUBLIC_URL + "/icons/greenCheck.png"}
          alt="isDone"
        />
      )}
    </div>
    {name}
    <img
      className="todo-item__remove"
      src={process.env.PUBLIC_URL + "/icons/crossLogo.png"}
      onClick={toggleRemove}
    />
  </div>
);

export default ToDoItem;

import React from "react";
import ToDoItem from "../components/ToDoItem.js";
import uuidv4 from "uuid/v4";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: uuidv4(), name: "Buy Milk", isDone: true },
        { id: uuidv4(), name: "Go swim", isDone: false }
      ],
      newToDoInput: ""
    };
  }

  updateTodoInput = event => {
    this.setState({
      newToDoInput: event.target.value
    });
  };

  addToDo = () => {
    const name = this.state.newToDoInput;
    const newToDo = {
      id: uuidv4(),
      name: name,
      isDone: false
    };

    this.setState(state => {
      return { todos: [...state.todos, newToDo], newToDoInput: "" };
    });
  };

  toggleTodoItem(itemId) {
    const todoItem = this.state.todos.find(todoItem => todoItem.id === itemId);
    todoItem.isDone = !todoItem.isDone;
    this.setState({
      todos: [...this.state.todos]
    });
  }

  removeTodoItem(itemId) {
    this.setState(state => {
      return {
        todos: [...state.todos.filter(todoitem => todoitem.id !== itemId)]
      };
    });
  }
  renderToDos() {
    return this.state.todos.map(todo => (
      <ToDoItem
        key={todo.id}
        name={todo.name}
        isDone={todo.isDone}
        toggleTodo={() => this.toggleTodoItem(todo.id)}
        toggleRemove={() => this.removeTodoItem(todo.id)}
      />
    ));
  }

  render() {
    return (
      <div>
        <h2>todo list</h2>
        <input
          type="text"
          value={this.state.newToDoInput}
          onChange={this.updateTodoInput}
        />
        <button onClick={this.addToDo}>Add</button>
        {this.renderToDos()}
      </div>
    );
  }
}
export default ToDoList;

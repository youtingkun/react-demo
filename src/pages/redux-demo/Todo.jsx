import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../../store/actions";

const Todo = ({ todo,toggleTodo,activeFilter, }) => (
  <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}-{activeFilter}
    </span>
  </li>
);

const mapStateToProps = (state) => {
    return { activeFilter: state.visibilityFilter };
  };

// export default Todo;
export default connect(
    mapStateToProps,
  { toggleTodo }
)(Todo);

import React, { useContext } from "react";
import { TodoContext } from "./path/to/todo.context"; 

const TodoList = () => {
  const { todoList, deleteTodo } = useContext(TodoContext); 

  return (
    <ul className="todo-list">
      {todoList.length > 0 ? (
        todoList.map((todo, index) => (
          <li key={index}>
            <span>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button> {/* Delete button */}
          </li>
        ))
      ) : (
        <p>No todos yet!</p>
      )}
    </ul>
  );
};

export default TodoList;

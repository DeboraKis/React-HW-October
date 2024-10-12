import React, { useState, useContext } from "react";
import { TodoContext } from "./path/to/TodoProvider"; 

const Input = () => {
  const [input, setInput] = useState("");

  
  const { addTodo } = useContext(TodoContext);

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button
        onClick={() => {
          addTodo(input);
          setInput(""); 
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;

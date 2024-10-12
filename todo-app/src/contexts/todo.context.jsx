import React, { createContext, useState, useCallback } from "react";


export const TodoContext = createContext({
  addTodo: () => {},
  deleteTodo: () => {},
  todoList: [],
});

export const TodoProvider = (props) => {
  
  const [todoList, setTodoList] = useState([]);

 
  const addTodo = useCallback(
    (item) => {
      if (item) {
        setTodoList((prevTodoList) => [...prevTodoList, item]);
      }
    },
    [setTodoList]
  );

  
  const deleteTodo = useCallback(
    (index) => {
      setTodoList((prevTodoList) => prevTodoList.filter((_, i) => i !== index));
    },
    [setTodoList]
  );

  return (
    <TodoContext.Provider value={{ addTodo, deleteTodo, todoList }}>
      {props.children}
    </TodoContext.Provider>
  );
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./TodoList"; 

const App = () => {
  return (
    <Routes>
      <Route path="/todos" element={<TodoList />} />
    </Routes>
  );
};

export default App;

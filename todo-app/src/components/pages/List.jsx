import { useState } from "react";
import TodoList from "../TodoList";
import Input from "../Input";

const List = () => {
  const [list, setList] = useState(["go shopping", "do homework"]);

  const addToList = (item) => {
    if (!item) {
      return;
    } else {
      const newList = [...list, item];
      setList(newList);
    }
  };
  return (
    <>
      <h2 className="page-header">List</h2>
      <Input addToList={addToList} />
      <TodoList list={list} />
    </>
  );
};

export default List;

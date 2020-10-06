import React, { useContext } from "react";
import List from "@material-ui/core/List";
import { TodoContext } from "../context/Todos.context";
import TodoItem from "./TodoItem";

function TodoList() {
  const todosState = useContext(TodoContext);
  return (
    <List>
      {todosState.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
    </List>
  );
}

export default TodoList;

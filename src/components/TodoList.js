import React from "react";
import List from "@material-ui/core/List";
import TodoItem from "./TodoItem";

function TodoList({ allTodos, deleteTask, checkTask, showEditTaskForm }) {
  return (
    <List>
      {allTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          id={todo.id}
          deleteTask={deleteTask}
          checkTask={checkTask}
          completed={todo.completed}
          showEditTaskForm={showEditTaskForm}
        />
      ))}
    </List>
  );
}

export default TodoList;

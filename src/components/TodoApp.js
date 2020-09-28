import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AddBox } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useToggleState from "../hooks/useToggleState";

const useStyles = makeStyles({
  buttonContainer: {
    textAlign: "center",
  },
  addTaskButton: {
    margin: "1rem auto",
    "& svg": {
      marginRight: "0.5rem",
    },
  },
});

function TodoApp() {
  const initialTodos = [
    { id: uuidv4(), task: "Walk the dog", completed: false },
    { id: uuidv4(), task: "Pet the dog", completed: false },
    { id: uuidv4(), task: "Buy groceries", completed: false },
  ];
  const [allTodos, setTodos] = useState(initialTodos);
  const [showModal, toggleModalTrue, toggleModalFalse] = useToggleState(false);
  const [
    newTodoForm,
    toggleNewTodoFormlTrue,
    toggleNewTodoFormFalse,
  ] = useToggleState(true);
  const [taskToEdit, setTaskToEdit] = useState("");
  function addTaskToList(taskInput) {
    setTodos([
      ...allTodos,
      { id: uuidv4(), task: taskInput, completed: false },
    ]);
  }
  function deleteTask(taskId) {
    const updatedTodo = allTodos.filter((task) => task.id !== taskId);
    setTodos(updatedTodo);
  }
  function checkTask(taskId) {
    let updatedTodo = allTodos.map((todo) =>
      todo.id === taskId ? { ...todo, completed: !todo.completed } : { ...todo }
    );
    setTodos(updatedTodo);
  }
  function showNewFTaskForm() {
    toggleNewTodoFormlTrue();
    toggleModalTrue();
  }
  function showEditTaskForm(id) {
    toggleNewTodoFormFalse();
    toggleModalTrue();
    setTaskToEdit(id);
  }
  function editTask(taskInput) {
    let updatedTodo = allTodos.map((todo) =>
      todo.id === taskToEdit ? { ...todo, task: taskInput } : { ...todo }
    );
    setTodos(updatedTodo);
  }
  function renderForm() {
    if (newTodoForm)
      return (
        <TodoForm
          handleFormSubmit={addTaskToList}
          open={showModal}
          closeModal={toggleModalFalse}
          newTodoForm={newTodoForm}
        />
      );
    else
      return (
        <TodoForm
          handleFormSubmit={editTask}
          open={showModal}
          closeModal={toggleModalFalse}
          newTodoForm={newTodoForm}
          todo={allTodos.find((todo) => todo.id === taskToEdit)}
        />
      );
  }
  const classes = useStyles();
  return (
    <Grid container spacing={3} justify={"center"}>
      <Grid item xs={12} sm={8} md={6}>
        <Paper
          elevation={1}
          position='static'
          style={{ height: "800px", maxHeight: "100vh" }}
        >
          <AppBar color='primary' position='relative'>
            <Toolbar>
              <Typography variant='h6'>Todos with hooks</Typography>
            </Toolbar>
          </AppBar>
          <div className={classes.buttonContainer}>
            <Button
              color='secondary'
              variant='outlined'
              onClick={showNewFTaskForm}
              className={classes.addTaskButton}
            >
              <AddBox color='secondary' />
              Add Task
            </Button>
          </div>
          <TodoList
            allTodos={allTodos}
            deleteTask={deleteTask}
            checkTask={checkTask}
            showEditTaskForm={showEditTaskForm}
          />
        </Paper>
      </Grid>
      {renderForm()}
    </Grid>
  );
}

export default TodoApp;

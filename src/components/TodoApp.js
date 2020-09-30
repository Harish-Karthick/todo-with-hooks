import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AddBox } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import TodoList from "./TodoList";
import useTodoState from "../hooks/useTodoState";
import TodoForm from "./TodoForm";

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
  const {
    allTodos,
    taskToEdit,
    addTaskToList,
    checkTask,
    deleteTask,
    editTask,
    newTodoForm,
    showNewTaskForm,
    showEditTaskForm,
    showModal,
    toggleModalFalse,
  } = useTodoState("todos", []);
  const renderForm = () => {
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
  };
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
              onClick={showNewTaskForm}
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

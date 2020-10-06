import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { TodosProvider } from "../context/Todos.context";
import { UtilitiesProvider } from "../context/Utilities.context";
import AddTaskButton from "./AddTaskButton";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  return (
    <Grid container spacing={3} justify={"center"}>
      <TodosProvider>
        <UtilitiesProvider>
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
              <AddTaskButton />
              <TodoList />
            </Paper>
          </Grid>
          <TodoForm />
        </UtilitiesProvider>
      </TodosProvider>
    </Grid>
  );
}

export default TodoApp;

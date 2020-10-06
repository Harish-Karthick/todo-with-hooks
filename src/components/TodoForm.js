import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useInputState from "../hooks/useInputState";
import { TodoContext, TodoDispatchContext } from "../context/Todos.context";
import {
  UtilitiesContext,
  UtilitiesDispatchContext,
} from "../context/Utilities.context";

function TodoForm() {
  const [inputValue, handleInputChange, reset] = useInputState("");
  const todosState = useContext(TodoContext);
  const todosDispatch = useContext(TodoDispatchContext);
  const utilityDispatch = useContext(UtilitiesDispatchContext);
  const { newTodoForm, showModal, taskToEdit } = useContext(UtilitiesContext);
  const todo = newTodoForm
    ? todosState.find((todo) => todo.id === taskToEdit)
    : {};
  return (
    <Dialog
      open={showModal}
      aria-labelledby='form-dialog-title'
      fullWidth
      onClose={() => utilityDispatch({ type: "HIDE-MODAL" })}
    >
      <DialogTitle>{newTodoForm ? "New Task" : "Edit Task"}</DialogTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (newTodoForm) {
            todosDispatch({ type: "ADD-TASK", taskText: inputValue });
          } else {
            todosDispatch({
              type: "EDIT-TASK",
              taskText: inputValue,
              id: taskToEdit,
            });
          }
          reset();
          utilityDispatch({ type: "HIDE-MODAL" });
        }}
      >
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='todoTask'
            label={newTodoForm ? "Add a New Task" : todo.task}
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => utilityDispatch({ type: "HIDE-MODAL" })}
          >
            Cancel
          </Button>
          <Button variant='contained' color='primary' type='submit'>
            {newTodoForm ? "Add Task" : "Edit Task"}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default TodoForm;

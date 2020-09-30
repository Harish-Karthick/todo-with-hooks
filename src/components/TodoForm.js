import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useInputState from "../hooks/useInputState";

function TodoForm({ handleFormSubmit, open, closeModal, newTodoForm, todo }) {
  const [inputValue, handleInputChange, reset] = useInputState("");
  return (
    <Dialog
      open={open}
      aria-labelledby='form-dialog-title'
      fullWidth
      onClose={closeModal}
    >
      <DialogTitle>{newTodoForm ? "New Task" : "Edit Task"}</DialogTitle>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(inputValue);
          reset();
          closeModal();
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
          <Button variant='contained' color='secondary' onClick={closeModal}>
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

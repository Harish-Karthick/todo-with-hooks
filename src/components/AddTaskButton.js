import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { AddBox } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { UtilitiesDispatchContext } from "../context/Utilities.context";

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

function AddTaskButton() {
  const classes = useStyles();
  const utilityDispatch = useContext(UtilitiesDispatchContext);
  return (
    <div>
      <div className={classes.buttonContainer}>
        <Button
          color='secondary'
          variant='outlined'
          onClick={() => utilityDispatch({ type: "SHOW-NEW-TASK-FORM" })}
          className={classes.addTaskButton}
        >
          <AddBox color='secondary' />
          Add Task
        </Button>
      </div>
    </div>
  );
}

export default AddTaskButton;

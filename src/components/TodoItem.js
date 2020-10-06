import React, { useContext, memo } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { TodoDispatchContext } from "../context/Todos.context";
import { UtilitiesDispatchContext } from "../context/Utilities.context";

const useStyles = makeStyles({
  deleteButton: {
    color: "#e57373",
  },
  editButton: {
    color: "#4db6ac",
  },
});

function TodoItem({ task, id, completed }) {
  const todosDispatch = useContext(TodoDispatchContext);
  const utilityDispatch = useContext(UtilitiesDispatchContext);
  const classes = useStyles();
  return (
    <ListItem divider>
      <ListItemIcon>
        <Checkbox
          edge='start'
          checked={completed}
          tabIndex={-1}
          inputProps={{
            "aria-labelledby": completed
              ? `mark ${task} has not been completed`
              : `mark ${task} has been completed`,
          }}
          onChange={() => todosDispatch({ type: "CHECK-TASK", id: id })}
        />
      </ListItemIcon>
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton
          className={classes.deleteButton}
          onClick={() => todosDispatch({ type: "DELETE-TASK", id: id })}
          disableFocusRipple
        >
          <Delete />
        </IconButton>
        <IconButton
          className={classes.editButton}
          onClick={() =>
            utilityDispatch({ type: "SHOW-EDIT-TASK-FORM", id: id })
          }
          disableFocusRipple
        >
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default memo(TodoItem);

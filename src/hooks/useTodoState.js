import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "./useLocalStorage";
import useToggleState from "./useToggleState";

export default (key, initialTodos) => {
  const [allTodos, setTodos] = useLocalStorage(key, initialTodos);
  const [taskToEdit, setTaskToEdit] = useState("");
  const [showModal, toggleModalTrue, toggleModalFalse] = useToggleState(false);
  const [
    newTodoForm,
    toggleNewTodoFormTrue,
    toggleNewTodoFormFalse,
  ] = useToggleState(true);
  return {
    allTodos: allTodos,
    newTodoForm: newTodoForm,
    showModal: showModal,
    toggleModalTrue: toggleModalTrue,
    toggleModalFalse: toggleModalFalse,
    taskToEdit: taskToEdit,
    addTaskToList: (taskInput) => {
      setTodos([
        ...allTodos,
        { id: uuidv4(), task: taskInput, completed: false },
      ]);
    },
    deleteTask: (taskId) => {
      const updatedTodo = allTodos.filter((task) => task.id !== taskId);
      setTodos(updatedTodo);
    },
    checkTask: (taskId) => {
      let updatedTodo = allTodos.map((todo) =>
        todo.id === taskId
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );
      setTodos(updatedTodo);
    },
    editTask: (taskInput) => {
      let updatedTodo = allTodos.map((todo) =>
        todo.id === taskToEdit ? { ...todo, task: taskInput } : { ...todo }
      );
      setTodos(updatedTodo);
    },
    showEditTaskForm: (id) => {
      toggleNewTodoFormFalse();
      toggleModalTrue();
      setTaskToEdit(id);
    },
    showNewTaskForm: () => {
      toggleNewTodoFormTrue();
      toggleModalTrue();
    },
  };
};

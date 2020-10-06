export default function utilitiesReducer(state, action) {
  switch (action.type) {
    case "SHOW-NEW-TASK-FORM":
      return {
        newTodoForm: true,
        showModal: true,
        taskToEdit: "",
      };
    case "SHOW-EDIT-TASK-FORM":
      return {
        newTodoForm: false,
        taskToEdit: action.id,
        showModal: true,
      };
    case "HIDE-MODAL":
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
}

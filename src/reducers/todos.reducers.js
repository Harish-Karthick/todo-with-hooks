import { v4 as uuidv4 } from "uuid";
export default function todosReducer(state, action) {
  switch (action.type) {
    case "ADD-TASK":
      return [
        ...state,
        { id: uuidv4(), task: action.taskText, completed: false },
      ];

    case "DELETE-TASK":
      return state.filter((todo) => todo.id !== action.id);

    case "CHECK-TASK":
      return state.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );

    case "EDIT-TASK":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.taskText } : { ...todo }
      );

    default:
      return state;
  }
}

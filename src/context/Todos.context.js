import React, { createContext } from "react";
import { defaultTodos } from "../utilities/defaultValues";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import todosReducer from "../reducers/todos.reducers";

export const TodoContext = createContext();
export const TodoDispatchContext = createContext();

export function TodosProvider({ children }) {
  const [todosState, todosDispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todosReducer
  );
  return (
    <TodoContext.Provider value={todosState}>
      <TodoDispatchContext.Provider value={todosDispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

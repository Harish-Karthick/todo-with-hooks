import React, { createContext, useReducer } from "react";
import utilitiesReducer from "../reducers/utilities.reducers";
import { defaultUtilityValues } from "../utilities/defaultValues";

export const UtilitiesContext = createContext();
export const UtilitiesDispatchContext = createContext();

export function UtilitiesProvider({ children }) {
  const [utilityStates, utilityDispatch] = useReducer(
    utilitiesReducer,
    defaultUtilityValues
  );
  return (
    <UtilitiesContext.Provider value={utilityStates}>
      <UtilitiesDispatchContext.Provider value={utilityDispatch}>
        {children}
      </UtilitiesDispatchContext.Provider>
    </UtilitiesContext.Provider>
  );
}

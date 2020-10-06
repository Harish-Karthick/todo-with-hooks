import { useReducer, useEffect } from "react";
export function useLocalStorageReducer(key, defaultValue, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem("todos") || String(defaultValue)
      );
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
    // eslint-disable-next-line
  }, [state]);
  return [state, dispatch];
}

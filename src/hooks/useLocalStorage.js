import { useState, useEffect } from "react";
function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
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
  return [state, setState];
}
export default useLocalStorage;

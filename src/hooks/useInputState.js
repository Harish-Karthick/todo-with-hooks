import { useState } from "react";

export default (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function reset() {
    setInputValue("");
  }
  return [inputValue, handleInputChange, reset];
};

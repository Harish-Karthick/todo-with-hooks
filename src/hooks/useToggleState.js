import { useState } from "react";

export default (initialValue) => {
  const [toggle, setToggle] = useState(initialValue);
  function setToggleTrue() {
    setToggle(true);
  }
  function setToggleFalse() {
    setToggle(false);
  }
  return [toggle, setToggleTrue, setToggleFalse];
};

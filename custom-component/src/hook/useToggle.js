import { useState } from "react";

const useToggle = (initialState) => {
  const [toggle, setToggle] = useState(initialState);
  const onClick = () => {
    setToggle(prev => !prev);
  }
  return { toggle, onClick };
};

export default useToggle;
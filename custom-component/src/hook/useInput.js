import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  }
  const onBlur = () => {
    setResult(value);
  }

  return { value, result, onChange, onBlur };
};

export default useInput;
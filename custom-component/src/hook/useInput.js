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

  return { 
    inputProps: {
      value, onChange, onBlur
    },
    setValue, result
   };
};

export default useInput;
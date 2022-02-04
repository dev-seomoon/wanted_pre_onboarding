import React from "react";
import ClickToEditStyled from "./ClickToEdit.styles";
import useInput from "../../hook/useInput";

const ClickToEdit = () => {
  const name = useInput();
  const age = useInput();
  return (
    <ClickToEditStyled>
      <label htmlFor="name">
        이름
        <input type="text" id="name" autoComplete="off" {...name} />
      </label>
      <label htmlFor="age">
        나이
        <input type="text" id="age" autoComplete="off" {...age} />
      </label>
      <div>
        이름 {name.result} 나이 {age.result}
      </div>
    </ClickToEditStyled>
  );
};

export default ClickToEdit;

import React from "react";
import ClickToEditStyled, { FormItem, FormResult } from "./ClickToEdit.styles";
import useInput from "../../hook/useInput";

const ClickToEdit = () => {
  const name = useInput();
  const age = useInput();
  return (
    <ClickToEditStyled>
      <FormItem htmlFor="name">
        이름
        <FormItem.Input type="text" id="name" autoComplete="off" {...name.inputProps} />
      </FormItem>
      <FormItem htmlFor="age">
        나이
        <FormItem.Input type="text" id="age" autoComplete="off" {...age.inputProps} />
      </FormItem>
      <FormResult>
        이름 {name.result} 나이 {age.result}
      </FormResult>
    </ClickToEditStyled>
  );
};

export default ClickToEdit;

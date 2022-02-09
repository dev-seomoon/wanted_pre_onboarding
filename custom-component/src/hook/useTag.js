import { useState } from "react";
import useInput from "./useInput";

const useTag = (initialValue) => {
  const tagInput = useInput();
  const [tagList, setTagList] = useState(initialValue);

  const addTag = e => {
    if (e.key === "Enter") {
      setTagList([...tagList, tagInput.inputProps.value]);
      tagInput.setValue("");
    }
  }

  const removeTag = tag => {
    setTagList(tagList.filter(item => item !== tag));
  }

  return { tagInput, tagList, removeTag, addTag };
};

export default useTag;
import { useState } from "react";
import nextId from "react-id-generator";
import useInput from "./useInput";

const useTag = () => {
  const tagInput = useInput();
  const [tagList, setTagList] = useState([{
    id: nextId(), value: "Wanted"
  }]);

  const addTag = e => {
    if (e.key === "Enter") {
      setTagList([...tagList, {id: nextId(), value: tagInput.inputProps.value} ]);
      tagInput.setValue("");
    }
  }

  const removeTag = removeId => {
    setTagList(tagList.filter(item => item.id !== removeId));
  }

  return { tagInput, tagList, removeTag, addTag };
};

export default useTag;
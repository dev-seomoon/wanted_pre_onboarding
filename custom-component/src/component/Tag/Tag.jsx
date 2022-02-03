import React, { useState } from "react";
import TagStyled from "./Tag.styles";

const Tag = () => {
  const [value, setValue] = useState("");
  const [tagList, setTagList] = useState(["tag 1", "tag 2"]);
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  const addTag = e => {
    if (e.key === "Enter") {
      setTagList([...tagList, e.target.value]);
      setValue("");
    }
  };
  const removeTag = tag => {
    setTagList(tagList.filter(item => item !== tag));
  };
  return (
    <TagStyled>
      <ul>
        {tagList.map(tag => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(tag);
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <input value={value} onChange={handleInputChange} onKeyPress={addTag} placeholder="Press enter to add tags" />
    </TagStyled>
  );
};

export default Tag;

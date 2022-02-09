import React, { useState } from "react";
import TagStyled, { TagList, DeleteTagButton, TagInput } from "./Tag.styles";

const Tag = () => {
  const [value, setValue] = useState("");
  const [tagList, setTagList] = useState(["Wanted"]);
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
      <TagList>
        {tagList.map(tag => (
          <TagList.Item key={tag}>
            {tag}
            <DeleteTagButton
              type="button"
              onClick={() => {
                removeTag(tag);
              }}
            >
              x
            </DeleteTagButton>
          </TagList.Item>
        ))}
      </TagList>
      <TagInput value={value} onChange={handleInputChange} onKeyPress={addTag} placeholder="Press enter to add tags" />
    </TagStyled>
  );
};

export default Tag;

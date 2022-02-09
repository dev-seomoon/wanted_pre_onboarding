import React from "react";
import TagStyled, { TagList, DeleteTagButton, TagInput } from "./Tag.styles";
import useTag from "../../hook/useTag";

const Tag = () => {
  const { tagInput, tagList, removeTag, addTag } = useTag(["Wanted"]);
  return (
    <TagStyled>
      <TagList>
        {tagList.map(tag => (
          <TagList.Item key={tag}>
            {tag}
            <DeleteTagButton onClick={() => removeTag(tag)}>x</DeleteTagButton>
          </TagList.Item>
        ))}
      </TagList>
      <TagInput {...tagInput.inputProps} onKeyPress={addTag} placeholder="Press enter to add tags" />
    </TagStyled>
  );
};

export default Tag;

import React from "react";
import TagStyled, { TagList, DeleteTagButton, TagInput } from "./Tag.styles";
import useTag from "../../hook/useTag";

const Tag = () => {
  const { tagInput, tagList, removeTag, addTag } = useTag();
  return (
    <TagStyled>
      <TagList>
        {tagList.map(tag => (
          <TagList.Item key={tag.id}>
            {tag.value}
            <DeleteTagButton onClick={() => removeTag(tag.id)}>x</DeleteTagButton>
          </TagList.Item>
        ))}
      </TagList>
      <TagInput {...tagInput.inputProps} onKeyPress={addTag} placeholder="Press enter to add tags" />
    </TagStyled>
  );
};

export default Tag;

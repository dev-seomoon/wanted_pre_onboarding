import React, { useRef } from "react";
import useAutoComplete from "../../hook/useAutoComplete";
import AutoCompleteStyled, { SearchBar, SuggestionField, ResetButton } from "./AutoComplete.styles";

const AutoComplete = () => {
  const { search, suggestions } = useAutoComplete();
  const { showSuggestions, filteredSuggestions, addSuggestion } = suggestions;
  const inputRef = useRef();

  const handleEnter = e => {
    if (e.key === "Enter") {
      addSuggestion(e.target.value);
    }
  };

  const handleReset = () => {
    search.onReset();
    inputRef.current.focus();
  };

  return (
    <AutoCompleteStyled>
      <SearchBar ref={inputRef} value={search.searchValue} onChange={search.onChange} onKeyPress={handleEnter} showSuggestion={showSuggestions} />
      <ResetButton onClick={handleReset} />
      <SuggestionField show={showSuggestions}>
        {filteredSuggestions.map(keyword => (
          <SuggestionField.Item key={keyword} onClick={search.onSelect}>
            {keyword}
          </SuggestionField.Item>
        ))}
      </SuggestionField>
    </AutoCompleteStyled>
  );
};

export default AutoComplete;

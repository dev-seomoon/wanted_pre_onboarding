import React, { useRef, useState } from "react";
import AutoCompleteStyled, { SearchBar, SuggestionField, ResetButton } from "./AutoComplete.styles";

const AutoComplete = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const inputRef = useRef();

  const handleSuggestion = input => {
    const filtered = suggestions.filter(keyword => keyword.toLowerCase().indexOf(input.toLowerCase()) > -1 && input !== "");
    if (filtered.length > 0) {
      setFilteredSuggestions(filtered);
      setShowSuggestion(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestion(false);
    }
  };

  const handleInputChange = e => {
    setValue(e.target.value);
    handleSuggestion(e.target.value);
  };

  const handleEnter = e => {
    if (e.key === "Enter") {
      setSuggestions([...suggestions, e.target.value]);
      setValue("");
      setShowSuggestion(false);
    }
  };

  const selectSuggestion = e => {
    setValue(e.target.innerText);
    handleSuggestion(e.target.innerText);
  };

  const handleReset = () => {
    setValue("");
    setFilteredSuggestions([]);
    setShowSuggestion(false);
    inputRef.current.focus();
  };

  return (
    <AutoCompleteStyled>
      <SearchBar ref={inputRef} value={value} onChange={handleInputChange} onKeyPress={handleEnter} showSuggestion={showSuggestion} />
      <ResetButton onClick={handleReset} />
      <SuggestionField show={showSuggestion}>
        {filteredSuggestions.map(keyword => (
          <li key={keyword} onClick={selectSuggestion}>
            {keyword}
          </li>
        ))}
      </SuggestionField>
    </AutoCompleteStyled>
  );
};

export default AutoComplete;

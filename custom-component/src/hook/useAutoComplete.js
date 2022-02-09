import { useState } from "react";

const useAutoComplete = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const addSuggestion = input => {
    setSuggestions([...suggestions, input]);
    setShowSuggestions(false);
    setSearchValue("");
  };

  const filterSuggestions = input => {
    const filtered = suggestions.filter(item => item.toLowerCase().indexOf(input.toLowerCase()) > -1 && input !== "");
    if (filtered.length > 0) {
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const onChange = e => {
    setSearchValue(e.target.value);
    filterSuggestions(e.target.value);
  }

  const onReset = () => {
    setSearchValue("");
    setFilteredSuggestions([]);
    setShowSuggestions(false);
  };

  const onSelect = e => {
    setSearchValue(e.target.innerText);
    filterSuggestions(e.target.innerText);
  }

  return { 
    search: {
      searchValue, onChange, onReset, onSelect
    },
    suggestions: {
      filteredSuggestions, showSuggestions, addSuggestion
    }
  }
};

export default useAutoComplete;
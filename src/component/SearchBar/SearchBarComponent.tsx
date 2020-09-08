import React, { useState } from 'react';
import './SearchBarComponent.css';

interface SearchBarComponentProps {
  initialValue: string;
  onSearchValueChange: (x: string) => void;
}

function SearchBarComponent(props: SearchBarComponentProps) {
  const { initialValue, onSearchValueChange } = props;

  const [searchValueState, searchValueStateChange] = useState<string>(initialValue);

  function handleSearchValueChange(value: string) {
    searchValueStateChange(value);
    onSearchValueChange(value);
  }

  return (
    <div className="search-bar">
      <div className="search-label">Search</div>
      <div className="search-input">
        <input
          type="text"
          className="form-control"
          aria-label="search-input"
          value={searchValueState}
          onChange={(e) => handleSearchValueChange(e.target.value)}
          name="search"
        />
      </div>
    </div>
  );
}

SearchBarComponent.defaultProps = {
  initialValue: '',
} as SearchBarComponentProps;

export default SearchBarComponent;

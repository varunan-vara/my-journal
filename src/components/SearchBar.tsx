import React, {FC, ReactElement, useState} from "react";

const SearchBar : FC = ({}) : ReactElement => {

    const [searchBarVal, updateSearchBarVal] = useState("");

    const handleChange = (event: any) => {
        event.preventDefault();
        updateSearchBarVal(event.target.value);
    }

    return(
        <div id="SearchBar">
            <input 
            className="searchBarTag cardShadow"
            type="search"
            placeholder="Search for entries here..."
            onChange={handleChange}
            value={searchBarVal} />
            <div id="searchbarWhiteBox" />
        </div>
    )
}

export default SearchBar;
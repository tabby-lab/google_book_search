import React from 'react';

const Search = (props) => {
return(
    <div className="search-area">
        <form action="">
            <input onChange={props.handleSearch} type="text" />
            <button type="submit" onClick={props.searchBook}>Search</button>
        </form>
    </div>
)
}

export default Search;
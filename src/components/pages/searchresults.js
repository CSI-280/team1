import React from 'react';
import Search from '../search.js';

function Search_Results() {
    return (
        <React.Fragment>
            <h1>Search Results</h1>
            <Search index="0"/>
            <Search index="1"/>
            <Search index="2"/>
            <Search index="3"/>
            <Search index="4"/>
            <Search index="5"/>
        </React.Fragment>
    )
}

export default Search_Results;
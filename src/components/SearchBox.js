import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <input type='search' onChange={searchChange} placeholder='search cat'/>
    );
}

export default SearchBox;
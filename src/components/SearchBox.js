import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) =>{
    return(
        <input type='search' onChange={searchChange} placeholder='search cat'/>
    );
}

export default SearchBox;
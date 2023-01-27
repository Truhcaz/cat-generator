import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import './App.css';

function App() {

    const [cats, setCats] = useState([]);
    const [searchfield, setSearchfield] =useState(''); 

    useEffect (() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => { setCats(users)})
        }, [])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

        const filteredcats = cats.filter(cat =>{
            return cat.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (cats.length===0){
            return <h1> Loading... </h1>
        }
        else{
        return(
            <React.Fragment>
            
            <h1 className='title'> Cat Generator </h1>
            <div className='search-bar'>
            <SearchBox searchChange={onSearchChange}/>
            </div>

            <Scroll>
                <CardList cats={filteredcats}/>
            </Scroll>
        </React.Fragment>
    );}
}

export default App;
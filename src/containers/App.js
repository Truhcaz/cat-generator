import React, { Component } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import './App.css';

class App extends Component{
    constructor(){
        super()
        this.state = {
            cats:[],
            searchfield:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => {this.setState({cats:users})})
    }

    onSearchChange = (event) => {

        this.setState({searchfield: event.target.value})
        }

    render(){
        const { cats, searchfield} = this.state;
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
            <SearchBox searchChange={this.onSearchChange}/>
            </div>

            <Scroll>
                <CardList cats={filteredcats}/>
            </Scroll>
        </React.Fragment>
    );}
    }
}

export default App;
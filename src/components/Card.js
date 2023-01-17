import React from 'react';
import './Card.css';

const Card = ({id,username, name}) => {
    return(
        <div className="card-container">
            <img alt='robot' src={`https://robohash.org/'${name}'?size=200x200&set=set4&bgset=bg1`}/>
            <div className="card">
                <h2 id='name'>{name}</h2>
                <p id='pet-name'>{username}</p>
            </div>
        </div>
    )
}

export default Card;
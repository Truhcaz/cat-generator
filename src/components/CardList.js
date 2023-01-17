import React from 'react';
import Card from './Card';

const CardList = ({cats}) => {

    const cardComponent = cats.map((user, i) => {
        return <Card key={i} id={cats[i].id} name={cats[i].name} username={cats[i].username}/>
    })
    return(
        <React.Fragment>
           {cardComponent}
        </React.Fragment>
    )   
}

export default CardList;
import Card from './Card';

import React from 'react';

const CardList = ({robots})=>{
    // const cardComp = ()=>{
    //     var arr = [];
    //     for(var i=0; i<10; i++){
    //         arr.push(<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />);
    //     }
    //     return arr;
    // }
    // if(!robots) return null;
    let cardComp = robots.map((user, i) => {
            return (
                <Card
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    origin={robots[i].origin}
                    desc = {robots[i].description}
                    image={robots[i].image}
                />
                );
            })
    return(
        <div className='container'>
            <div className="row g-5 justify-content-center align-items-center">
                { cardComp }
            </div>
        </div>
    );
}

export default CardList;
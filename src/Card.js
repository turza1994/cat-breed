import React from 'react';


const Card = ({id, name, origin, desc, image})=>{
        if(!image) return null;
        return(
            <div className="bg-near-white dib br3 pa3 ma3 grow bw-4 shadow-5 tc w-30 lh-copy">
                <img className="w-100" src={image.url} alt='robo friend'/>
                <h3>Name: {name} </h3>
                <h4>Origin: {origin} </h4>
                <p><b>Description: </b>{desc}</p>
            </div>
        );
    
}

export default Card;
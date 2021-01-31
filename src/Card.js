import React from 'react';


const Card = ({id, name, email, image})=>{
        if(!image) return null;
        return(
            <div className="bg-near-white dib br3 pa3 ma3 grow bw-4 shadow-5 tc w-20">
                <img className="w-100" src={image.url} alt='robo friend'/>
                <h3>Name: {name} </h3>
                <p>email: {email} </p>
            </div>
        );
    
}

export default Card;
import React from 'react';


const Card = ({id, name, origin, desc, image})=>{
        if(!image) return null;
        return(
            <div className="col-md-4">
                <div className="bg-near-white br3 grow bw-4 shadow-5 tc w-100 lh-copy">
                    <img className="w-100 rounded-top" src={image.url} alt='robo friend'/>
                    <div className="p-5">
                        <h3>Name: {name} </h3>
                        <h4>Origin: {origin} </h4>
                        <p><b>Description: </b>{desc}</p>
                    </div>
                </div>
            </div>
        );
    
}

export default Card;
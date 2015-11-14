import React from 'react';


const Card = ({id, name, origin, desc, image})=>{
        if(!image) return null;
        return(
            <div className="col-md-4">
                <div className="bg-near-white br3 grow bw-4 shadow-5 w-100 lh-copy">
                    <img className="w-100 rounded-top" src={image.url} alt='robo friend' style={{height: '300px'}} />
                    <div className="p-3">
                        <h2 className="text-center mb-3">{name} </h2>
                        <h4>Origin: {origin} </h4>
                        <h4>Description: <br /> <span className="lead">{desc}</span></h4>
                    </div>
                </div>
            </div>
        );
    
}

export default Card;
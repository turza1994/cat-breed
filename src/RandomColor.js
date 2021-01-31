import React from 'react';

const RandomColor = ({onClickRandomColor})=>{
    return(
        <input className="dib h-25 f3" type='button' value='Random color' onClick={onClickRandomColor} style={{background:"#3DB724", color:'white', padding: '5px', margin: '2vh 0 0 3vh', borderRadius: '10px'}}  />
    );
}

export default RandomColor;
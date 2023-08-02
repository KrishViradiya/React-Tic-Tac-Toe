// import React from 'react'

import Icons from "../Icons/Icons";
import "./Card.css";

function Card({ onPlay , player, index ,endGame}) {
    let icon = <Icons />
    if(player == "X"){
      icon = <Icons name={"cross"} />
    }else if(player == "O"){
      icon = <Icons name={"Circle"} />
    }
  
  return (

    <div className="card" onClick={() =>  !endGame && player=="" && onPlay(index)}>
      
        {icon}
      
      
    </div>
  );
}

export default Card;

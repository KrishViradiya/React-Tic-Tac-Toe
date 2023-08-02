// import React from 'react'

import Card from "../Card/Card";
import "./Grid.css";
function Grid({ numberOfCards }) {
  return (
    <div className="grid">
      {Array(numberOfCards)
        .fill(<Card name={"name"} />)
        .map((el, idx) => {
          return <Card key={"idx"} />;
        })}
    </div>
  );
}

export default Grid;

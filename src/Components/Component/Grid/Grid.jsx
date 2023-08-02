// import React from 'react'
import isWinner from "../../../helper/isWinner"
import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import { ToastContainer, toast } from "react-toastify";


function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(true); // true => O -- false => X\
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  function play(index) {
    // console.log(index);

    if (turn == true) {
      board[index] = "O";
    } else {
    board[index] = "X";
    }

    const win = isWinner(board, turn ? "O" : "x");
    if (win){
       setWinner(win);
    //    toast.success(`Congratulations Winner is ${win}`, {
    //     position: toast.POSITION.TOP_RIGHT
    // });
    }
    setBoard([...board]);
    setTurn(!turn);
    
  }

  function reset() {
    setTurn(true);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  }

  return (
    <>
      {winner && (
        <>
          <h1 className="turn-highlight"> Winner is {winner} </h1>
          <button className="reset" onClick={reset}> Reset Game </button>
          <ToastContainer  />
        </>
      )}

      <h1 className="turn-highlight" >  Current Turn : {(turn) ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((value, idx) => {
          return <Card onPlay={play} endGame={(winner) ? true : false}  player={value} key={idx} index={idx} />;
        })}
      </div>
    </>
  );
}

export default Grid;

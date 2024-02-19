// import React from 'react'
import isWinner from "../../../helper/isWinner";
import { useCallback, useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import { toast } from "react-toastify";
// import { useCallback } from "react";

function Grid({ numberOfCards }) {
  const [turn, setTurn] = useState(true); // true => O -- false => X\
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);

  const play = useCallback(
    function playcallBack(index) {
      // console.log(index);

      if (turn == true) {
        board[index] = "O";
      } else {
        board[index] = "X";
      }

      const win = isWinner(board, turn ? "O" : "X");
      if (win) {
        setWinner(win);
        toast.success(`Winner is ${win} `);
      }

      const isBoardFull = board.every((cell) => cell !== "");

      if (isBoardFull && !win) {
        setIsDraw(true);
        toast.info("It's a draw!");
        
      }
     
      setBoard([...board]);
      setTurn(!turn);
    },
    [turn]
  );

  function reset() {
    setTurn(true);
    setIsDraw(false);
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  }

  return (
    <>
      {winner && (
        <>
          <h1 className="turn-highlight"> Winner is {winner} </h1>
          <button className="reset" onClick={reset}>
            {" "}
            Reset Game{" "}
          </button>
        </>
      )}
      {
        isDraw && (
          <>
          <button className="reset" onClick={reset}>
            {" "}
            Play Again{" "}
          </button>
          </>
        )
      }

      <h1 className="turn-highlight"> Current Turn : {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((value, idx) => {
          return (
            <Card
              onPlay={play}
              endGame={winner ? true : false}
              player={value}
              key={idx}
              index={idx}
            />
          );
        })}
      </div>
    </>
  );
}

export default Grid;

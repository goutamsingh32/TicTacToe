import React from "react";
import { useState } from "react";

function TicTac() {
  const [start, setStart] = useState(true);
  var [num, setNum] = useState(["", "", "", "", "", "", "", "", ""]);
  function handleClick(i) {
    var newArr = [...num];
    if (newArr[i] === "") {
      if (start === true) {
        newArr[i] = "X";
      } else {
        newArr[i] = "O";
      }
      num[i] = newArr[i];
      setNum(newArr);
      setStart(!start);
    }
  }

  var [winner, setWinner] = useState("");
  function setWinner1(w) {
    let newArr = num.filter(function (s) {
      if (s === "") {
        return " ";
      } else return s;
    });

    setNum(newArr);
    setWinner(w);
  }
  function win() {
    if (num[0] === "X" && num[1] === "X" && num[2] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[0] === "O" && num[1] === "O" && num[2] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[3] === "X" && num[4] === "X" && num[5] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[3] === "O" && num[4] === "O" && num[5] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[6] === "X" && num[7] === "X" && num[8] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[6] === "O" && num[7] === "O" && num[8] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[0] === "X" && num[4] === "X" && num[8] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[0] === "O" && num[4] === "O" && num[8] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[2] === "X" && num[4] === "X" && num[6] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[2] === "O" && num[4] === "O" && num[6] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[0] === "X" && num[3] === "X" && num[6] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[0] === "O" && num[3] === "O" && num[6] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[1] === "X" && num[4] === "X" && num[7] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[1] === "O" && num[4] === "O" && num[7] === "O") {
      setWinner1("Player2 win!!!");
    } else if (num[2] === "X" && num[5] === "X" && num[8] === "X") {
      setWinner1("Player1 win!!!");
    } else if (num[2] === "O" && num[5] === "O" && num[8] === "O") {
      setWinner1("Player2 win!!!");
    } else {
      if (
        num[0] !== "" &&
        num[1] !== "" &&
        num[2] !== "" &&
        num[3] !== "" &&
        num[4] !== "" &&
        num[5] !== "" &&
        num[6] !== "" &&
        num[7] !== "" &&
        num[8] !== ""
      ) {
        setWinner("Draw");
      }
    }
  }
  return (
    <div>
      <section>
        {winner !== "" ? (
          <button className="game--restart">{winner}</button>
        ) : null}

        <div className="game--container">
          {num.map((element, index) => {
            return (
              <>
                <div
                  data-cell-index={index}
                  className="cell"
                  onClick={() => {
                    handleClick(index);
                    win();
                  }}
                >
                  {element}
                </div>
              </>
            );
          })}
        </div>

        <button
          className="game--restart"
          onClick={() => {
            setWinner("");
            setStart(true);

            let newArr = ["", "", "", "", "", "", "", "", ""];
            setNum(newArr);
          }}
        >
          Restart Game
        </button>
      </section>
    </div>
  );
}
export default TicTac;

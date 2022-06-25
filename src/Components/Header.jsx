import React from "react";
const style = {
  backgroundColor: "#c499ba",
  backgroundImage:
    'url("https://www.transparenttextures.com/patterns/black-linen.png")',
  fontFamily: "'Herr Von Muellerhoff', cursive",
  fontSize: "x-large",
  color: "#F9F9F9",
  padding: "1rem"
};
function Header() {
  return (
    <>
      <div style={style}>
        <h1>TicTacToe</h1>
      </div>
    </>
  );
}
export default Header;

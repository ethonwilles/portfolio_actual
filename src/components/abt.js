import React from "react";
import NavBar from "./navbar";
import profilePic from "../assets/images/alt_prof.jpg";
import BackBar from "./backBar";
import TicTacToe from "./sub-abt-comps/ticTacToe";

const Abt = () => {
  const [wonText, setWonText] = React.useState("play tic tac toe to view more about me!")
  const [textStyle, setTextStyle] = React.useState({})
  const noWin = () =>{
    const classNames = [".top-left", ".top-center", ".top-right", ".middle-left", ".middle-center", ".middle-right", ".bottom-left", ".bottom-center", ".bottom-right"]
    setWonText("No one won! try again!")
    setTextStyle({"color" : "red"})
    classNames.forEach(e=>{
      document.querySelector(e).innerHTML = ""
    })
  }

  const botWon = () =>{
    const classNames = [".top-left", ".top-center", ".top-right", ".middle-left", ".middle-center", ".middle-right", ".bottom-left", ".bottom-center", ".bottom-right"]
    setWonText("You let the bot win?! Try Again!")
    setTextStyle({"color" : "red"})
    classNames.forEach(e=>{
      document.querySelector(e).innerHTML = ""
    })
  }


  return (
    <div className="abt">
     <BackBar />
     <TicTacToe noWin={noWin} botWon={botWon}/>
     <p style={textStyle}>{wonText}</p>
    </div>
  );
};
export default Abt;

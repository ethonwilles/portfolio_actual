import React from "react";
import NavBar from "./navbar";
import profilePic from "../assets/images/alt_prof.jpg";
import BackBar from "./backBar";
import TicTacToe from "./sub-abt-comps/ticTacToe";
import Loader from "./anim-comps/loader";

const Abt = () => {
  const [wonText, setWonText] = React.useState("play tic tac toe to view more about me!")
  const [textStyle, setTextStyle] = React.useState({})
  const [loaderStyle, setLoaderStyle] = React.useState({"visibility" : "hidden"})
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
  const playerWon = () =>{
    setWonText("You Won! Well Done!")
    setTextStyle({"color" : "lightgreen"})
    setLoaderStyle({"visibility": "visible", animation: 'fadeIn 2s linear, spin .7s ease-in-out infinite'})
  }


  return (
    <div className="abt">
     <BackBar />
     <TicTacToe noWin={noWin} botWon={botWon} playerWon={playerWon}/>
     <p style={textStyle}>{wonText}</p>
     <Loader style={loaderStyle}/>
    </div>
  );
};
export default Abt;

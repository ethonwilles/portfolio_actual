import React, { Component, useEffect } from "react";

import CompExp from "./exp-comp/comp-exp";
import Projects from "./exp-comp/projects";
import BackBar from "./backBar";
const Exp = () => {
  const inputRefZero = React.createRef()
  const inputRefOne = React.createRef()
  const inputRefTwo = React.createRef()
  const inputRefThree = React.createRef()
  const inputRefFour = React.createRef()
  const [showExp, setShowExp] = React.useState(false)
  const [showFailure, setShowFailure] = React.useState(false)
  const [word , setWord] = React.useState("space")
  const [scrambledWord, setScrambledWord] = React.useState()
  const [userInputUnscramble, setUserInputUnscramble] = React.useState([])
  const [firstInput, setFirstInput] = React.useState("")
  const [secondInput, setSecondInput] = React.useState("")
  const [thirdInput, setThirdInput] = React.useState("")
  const [fourthInput, setFourthInput] = React.useState("")


  
  

  const scrambleWord = () =>{
    const list_scramble = word.split("")
    
    // while (list_scramble.length > 0) {
    //   let rannum = Math.floor(Math.random() * list_scramble.length + 1)
    //   console.log(rannum)
    //   listCompletedScramble.push(list_scramble[rannum])
    //   list_scramble.splice(rannum, 1)
    // }
    for (var i = list_scramble.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list_scramble[i];
      list_scramble[i] = list_scramble[j];
      list_scramble[j] = temp;
      
  }
  const completedList = list_scramble.join("")
  setScrambledWord(completedList)
  }

  React.useEffect(() =>{
    scrambleWord()

  }, [])


  const checkAnswer = fifthValue =>{
    const fullWord = firstInput + secondInput + thirdInput + fourthInput + fifthValue
    if(fullWord === word){
        setShowExp(true)
        setShowFailure(false)
    }else{
      setShowFailure(true)
      changeValueNone()
      inputRefZero.current.focus()
    }

    
  }

  const changeValueNone = () =>{
    inputRefOne.current.value = ""
    inputRefTwo.current.value = ""
    inputRefThree.current.value = ""
    inputRefFour.current.value = ""
    inputRefZero.current.value = ""
    
  }

  



  return (
    <div className="exp">
      <BackBar />
      <div className="game">
        <p style={{fontSize: "20px", fontStyle: "italic"}}>Unscramble the word to view Experience</p>
        <div className="scramble-viewer">
          <h1>{scrambledWord}</h1>
        </div>
        <div className="user-input-unscramble">
          <input type="text" ref={inputRefZero} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setFirstInput(e.target.value.toLowerCase().toString())
            inputRefOne.current.focus()
          }}/>
          <input type="text" ref={inputRefOne} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setSecondInput(e.target.value.toLowerCase().toString())
            inputRefTwo.current.focus()
          }}/>
          <input type="text" ref={inputRefTwo} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setThirdInput(e.target.value.toLowerCase().toString())
            inputRefThree.current.focus()
          }}/>
          <input type="text" ref={inputRefThree} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setFourthInput(e.target.value.toLowerCase().toString())
            inputRefFour.current.focus()
          }}/>
          <input type="text" ref={inputRefFour} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            
            checkAnswer(e.target.value.toLowerCase().toString())
          }}/>
        </div>
        <div className="notification-wrapper">
        {showFailure ? <p className="incorrect-wrapper" style={{color: "red", fontStyle: "italic", fontSize: "30px", margin: 0}} >Incorrect! Try again...</p> : showExp ? <p className="correct-wrapper" style={{color: "green", fontStyle: "italic", fontSize: "30px", margin: 0}}>Correct! Good Job!</p>: <span>&nbsp;</span>}


        </div>
      </div>
    </div>
  );
};
export default Exp;

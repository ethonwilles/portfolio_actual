import React, { Component, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CompExp from "./exp-comp/comp-exp";
import Projects from "./exp-comp/projects";
import BackBar from "./backBar";




import Loader from "./anim-comps/loader";


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

  const [loaderStyle, setLoaderStyle] = React.useState({"visibility" : "hidden"})

  // const reloadValue = useSelector(viewReloads).payload.counter.reloadValue
  // const dispatch = useDispatch()
  const history = useHistory()
  
  

  const scrambleWord = () =>{
    const list_scramble = word.split("")
    
    for (var i = list_scramble.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = list_scramble[i];
      list_scramble[i] = list_scramble[j];
      list_scramble[j] = temp;
      
  }
  const completedList = list_scramble.join("")
  if(completedList == "space"){
    scrambleWord()
  }else{
    setScrambledWord(completedList)
  }
  
  }

  React.useEffect(() =>{
    scrambleWord()

  }, [])

 

  const checkAnswer = fifthValue =>{
    const fullWord = firstInput + secondInput + thirdInput + fourthInput + fifthValue
    if(fullWord === word){
        setShowExp(true)
        setShowFailure(false)
        setLoaderStyle({"visibility" : "visible", animation: 'fadeIn 2s linear, spin .7s ease-in-out infinite'})
        setTimeout(() => {
          setLoaderStyle({"visibility" : "hidden"})
          history.push("/experience")
        }, 2000);
        
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

  const handleOnDrop = e =>{
    window.location.reload()
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
          <input type="text" onDrop={handleOnDrop} ref={inputRefZero} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setFirstInput(e.target.value.toLowerCase().toString())
            inputRefOne.current.focus()
          }}/>
          <input type="text" onDrop={handleOnDrop} ref={inputRefOne} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setSecondInput(e.target.value.toLowerCase().toString())
            inputRefTwo.current.focus()
          }}/>
          <input type="text" onDrop={handleOnDrop} ref={inputRefTwo} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setThirdInput(e.target.value.toLowerCase().toString())
            inputRefThree.current.focus()
          }}/>
          <input type="text" onDrop={handleOnDrop} ref={inputRefThree} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            setFourthInput(e.target.value.toLowerCase().toString())
            inputRefFour.current.focus()
          }}/>
          <input type="text" onDrop={handleOnDrop} ref={inputRefFour} style={showExp ? {borderColor: "green", color: "green"} : showFailure ? {borderColor: "red", color: "red"}: null} onChange={e =>{
            
            checkAnswer(e.target.value.toLowerCase().toString())
          }}/>
        </div>
        <div className="notification-wrapper">
        {showFailure ? <p className="incorrect-wrapper notification" style={{color: "red", fontStyle: "italic", fontSize: "30px", margin: 0, opacity: 0}} >Incorrect! Try again...</p> : showExp ? <p className="correct-wrapper notification" style={{color: "green", fontStyle: "italic", fontSize: "30px", margin: 0, animation: "fadeIn linear 2s"}}>Correct! Good Job!</p>: <span>&nbsp;</span>}


        </div>
        
        <Loader style={loaderStyle} />
        
        
      </div>
    </div>
  );
};
export default Exp;

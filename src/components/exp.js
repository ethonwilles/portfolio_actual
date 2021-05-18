import React, { Component, useEffect } from "react";

import CompExp from "./exp-comp/comp-exp";
import Projects from "./exp-comp/projects";
import BackBar from "./backBar";
const Exp = () => {
  const [word , setWord] = React.useState("space")
  const [scrambledWord, setScrambledWord] = React.useState()

  const scrambleWord = () =>{
    const list_scramble = word.split("")
    const listCompletedScramble = []
    while (list_scramble.length > 0) {
      let rannum = Math.floor(Math.random() * list_scramble.length + 1)
      console.log(rannum)
      listCompletedScramble.push(list_scramble[rannum])
      list_scramble.splice(rannum, 1)
    }
    console.log(listCompletedScramble.join(""))
  }

  React.useEffect(() =>{
    scrambleWord()
  }, [])
  return (
    <div className="exp">
      <BackBar />
      <div className="game">
        <p style={{fontSize: "20px", fontStyle: "italic"}}>Unscramble the word to view Experience</p>
        <div>
          <h1>{word}</h1>
          <h1>{scrambleWord}</h1>
        </div>
      </div>
    </div>
  );
};
export default Exp;

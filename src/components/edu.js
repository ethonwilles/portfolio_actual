import React from "react";
import BackBar from "./backBar";
import NavBar from "./navbar";
import Maze from "./sub-edu-comps/maze";

import edu from "../assets/homepage_icons/edu.svg"

import { useHistory } from "react-router-dom";



const Education = (props) => {
  const centerImgRef = React.createRef()
  const [spriteInUse, setSpriteInUse] = React.useState(false)
  const [centerImgStyle, setCenterImgStyle] = React.useState()
  const history = useHistory()
  

  React.useEffect(() =>{
    
    // if(reloads < 1){
    //   console.log("oj")
    //   centerImgRef.current.style.visibility = "visible"
    //   centerImgRef.current.style.animation = "scaleReverse 2s"
    // }else{
      centerImgRef.current.style.visibility = "hidden"
    // }
  },[])
    const spriteLeftBoundaries = e =>{
      if(spriteInUse){
       
        window.location.reload()
       
        
      }
    }
    const handleSpriteInUse = () =>{
      setSpriteInUse(true)
    }
    const gameWon = e =>{
      if(spriteInUse){
        history.push("/education")
      }
      
    }

  
  return (
    <div className="edu main">
      <BackBar />
      <div className="boundary" onMouseOver={spriteLeftBoundaries}></div>
      <div className="boundary-bottom" onMouseOver={spriteLeftBoundaries}></div>
      <div className="boundary-top" onMouseOver={spriteLeftBoundaries}></div>
      <div className="boundary-right" onMouseOver={spriteLeftBoundaries}></div>
      <div className="game-wrapper" >
      
      <Maze gameWon={gameWon} spriteInUse={spriteInUse} handleSpriteInUse={handleSpriteInUse}/>
      <div className="finish" onMouseEnter={gameWon}></div>
      </div>
      

      <div className="img-wrapper-inside-component">
          
          <img className="edu-img center-img" ref={centerImgRef} src={edu} style={centerImgStyle}></img>
          
          
        </div>

      <div className="edu-rules">
        <p>Rules: </p>
        <ul>
          <li>Hover over Red Square to begin.</li>
          <li>Do not leave yellow box once game has begun.</li>
          <li>If you touch the moving black pillars, you lose and must restart.</li>
          <li>Maneuver around the black pillars to enter the green column and view more about me!</li>
        </ul>
      </div>
      



      
      
      
    </div>
  );
};
export default Education;

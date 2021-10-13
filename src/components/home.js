import React from "react";
import { Link, useHistory } from "react-router-dom";
import BackBar from "./backBar";

// svg icon imports
import dragNDrop from "../assets/homepage_icons/drag-and-drop.png"
import exp from "../assets/homepage_icons/exp.svg"
import edu from "../assets/homepage_icons/edu.svg"
import abt from "../assets/homepage_icons/abt.svg"
import cntct from "../assets/homepage_icons/contact.svg"


// droppable
import {Draggable, Droppable} from "@shopify/draggable"



//redux
import { useSelector, useDispatch } from 'react-redux';

import HomepageLinkItem from "./sub-comps/homepageLinkItem";
import { selectName, resetReloads } from "../features/counter/counterSlice";
const Home = () => {

 const [isInDrop, setIsInDrop] = React.useState(false)
 const [middleElementStyle, setMiddleElementStyle] = React.useState({})
 const [middleElementPStyle, setMiddleElementPStyle] = React.useState({})
 const [urlToPush, setUrlToPush] = React.useState("")
  const history = useHistory()
  const dispatch = useDispatch()

  
    
    
    const handleDragEnter = e =>{
      e.target.classList.add("over")
      setMiddleElementPStyle({'color' : 'green'})
      if(urlToPush == "Experience"){
        history.push("/exp")
      }else if(urlToPush == "Education"){
        history.push("/edu")
      }else if(urlToPush == "Contact"){
        history.push("/contact")

      }else if(urlToPush == "About"){
        history.push('/about')
      }
      
    }

    const handleDragLeave = e =>{
      e.target.classList.remove("over")
      setMiddleElementPStyle({})
      
    }

    const handleMouseDown = url =>{
      setUrlToPush(url)
    }

  return (
    <div className="home" style={{height: "100vh"}}>
      <div className="head">
        <h1>Ethon Willes</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      
      <div className="trunk">
        
        
        
        <div className="trunk-comp one">
        <HomepageLinkItem name="Experience" handleUrl={handleMouseDown} imgSrc={exp} optionalClassName={"item-wrapper Experience"} isInDrop={isInDrop}/>
        

        <HomepageLinkItem name="Education" handleUrl={handleMouseDown} imgSrc={edu} optionalClassName={"item-wrapper Education"} isInDrop={isInDrop}/>
        </div>
        
      
        
      <div className="trunk-comp-middle two" onDragEnter={handleDragEnter} onDrop onDragLeave={handleDragLeave}>
      <img src={dragNDrop} alt="dropzone" style={middleElementStyle}  />
      <p style={middleElementPStyle}>Drag Icon to box to Begin</p>
      </div>


      <div className="trunk-comp three">
      <HomepageLinkItem name="About" handleUrl={handleMouseDown} imgSrc={abt} optionalClassName={"item-wrapper About"} isInDrop={isInDrop}/>
      <HomepageLinkItem name="Contact" handleUrl={handleMouseDown} imgSrc={cntct} optionalClassName={"item-wrapper Contact"} isInDrop={isInDrop}/>
      </div>
  
        
        
      </div>


      
      
    </div>
  );
};
export default Home;

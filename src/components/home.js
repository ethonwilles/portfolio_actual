import React from "react";
import { Link } from "react-router-dom";
import BackBar from "./backBar";

// svg icon imports
import dragNDrop from "../assets/homepage_icons/drag-and-drop.png"
import exp from "../assets/homepage_icons/exp.svg"
import edu from "../assets/homepage_icons/edu.svg"
import abt from "../assets/homepage_icons/abt.svg"
import cntct from "../assets/homepage_icons/contact.svg"


import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import HomepageLinkItem from "./sub-comps/homepageLinkItem";
const Home = () => {
  
  return (
    <div className="home">
      <div className="head">
        <h1>Ethon Willes</h1>
        <h3>Full Stack Web Developer</h3>
      </div>
      
      <div className="trunk">
        
        
        
        <div className="trunk-comp one">
        <HomepageLinkItem name="Experience" imgSrc={exp}/>
        

        <HomepageLinkItem name="Education" imgSrc={edu}/>
        </div>
        
      
        
      <div className="trunk-comp-middle two">
      <img src={dragNDrop} alt="dropzone"  />
      </div>


      <div className="trunk-comp three">
      <HomepageLinkItem name="About" imgSrc={abt}/>
      <HomepageLinkItem name="Contact" imgSrc={cntct}/>
      </div>
  
        
        
      </div>


      
      
    </div>
  );
};
export default Home;

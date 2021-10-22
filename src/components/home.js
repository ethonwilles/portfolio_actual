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





import HomepageLinkItem from "./sub-comps/homepageLinkItem";

import HomepageLoaderItems from "./sub-comps/homepageLoaderItem";
const Home = () => {
 const [eduReloads, setEduReloads] = React.useState(0)
 const [isInDrop, setIsInDrop] = React.useState(false)
 const [middleElementStyle, setMiddleElementStyle] = React.useState({})
 const [middleElementPStyle, setMiddleElementPStyle] = React.useState({})
 const [animImageSource, setAnimImageSource] = React.useState()
 const [urlToPush, setUrlToPush] = React.useState("")

 const [centerImgStyle, setCenterImgStyle] = React.useState({"visibility" : "hidden"})

  const history = useHistory()


    React.useEffect(() =>{
      console.log(eduReloads)
      setEduReloads(0)
    },[])
    
    const countEduReloads = () =>{
      const reloads = eduReloads + 1
      setEduReloads(reloads)

    }
    
    
    const handleDragEnter = e =>{
      e.target.classList.add("over")
      
      setMiddleElementPStyle({'color' : 'green'})
      if(urlToPush == "Experience"){
        document.querySelector(".exp-img").style.visibility = "visible"
        document.querySelector(".exp-img").style.animation = "scale 4.5s"
        setTimeout(()=>{ 
           
        history.push("/exp")
        }, 750)

        
      }else if(urlToPush == "Education"){
        
        document.querySelector(".edu-img").style.visibility = "visible"
        document.querySelector(".edu-img").style.animation = "scale 4.5s"
        setTimeout(()=>{ 
          
        history.push("/edu")
        }, 750)
       
      }else if(urlToPush == "Contact"){
        document.querySelector(".cntct-img").style.visibility = "visible"
        document.querySelector(".cntct-img").style.animation = "scale 4.5s"
        setTimeout(()=>{ 
           
        history.push("/contact")
        }, 750)
        

      }else if(urlToPush == "About"){
        document.querySelector(".abt-img").style.visibility = "visible"
        document.querySelector(".abt-img").style.animation = "scale 4.5s"
        setTimeout(()=>{ 
           
        history.push("/about")
        }, 750)
        
      }
      
    }

    const handleDragLeave = e =>{
      e.target.classList.remove("over")
      setMiddleElementPStyle({})
      
    }

    const handleMouseDown = url =>{
      setUrlToPush(url)
      if(urlToPush == "Experience"){
        setAnimImageSource(exp)
      }else if(urlToPush == "Education"){
        setAnimImageSource(edu)
      }else if(urlToPush == "Contact"){
        
        setAnimImageSource(cntct)
      }else if(urlToPush == "About"){
        setAnimImageSource(abt)
      
    }
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
        

        <HomepageLinkItem name="Education" countReloads={countEduReloads} viewReloads={eduReloads} handleUrl={handleMouseDown} imgSrc={edu} optionalClassName={"item-wrapper Education"} isInDrop={isInDrop}/>
        </div>
        
      
        
      <div className="trunk-comp-middle two" onDragEnter={handleDragEnter} onDrop onDragLeave={handleDragLeave}>
        <div className="img-wrapper">
          <img className="exp-img center-img" src={exp} style={centerImgStyle}/>
          <img className="edu-img center-img" src={edu} style={centerImgStyle}></img>
          <img className="abt-img center-img" src={abt} style={centerImgStyle}/>
          <img className="cntct-img center-img" src={cntct} style={centerImgStyle}/>
          
        </div>
      <img src={dragNDrop} alt="dropzone" style={middleElementStyle}  />
      <p style={middleElementPStyle}>Drag Icon to box to Begin</p>
      </div>


      <div className="trunk-comp three">
      <HomepageLinkItem name="About" handleUrl={handleMouseDown} imgSrc={abt} optionalClassName={"item-wrapper About"} isInDrop={isInDrop}/>
      <HomepageLinkItem name="Contact" handleUrl={handleMouseDown} imgSrc={cntct} optionalClassName={"item-wrapper Contact"} isInDrop={isInDrop}/>
      </div>
  
        
        
      </div>


      
      {/* <div className="transition">
        <HomepageLoaderItems source={animImageSource}/>
        <HomepageLoaderItems source={animImageSource}/>
        <HomepageLoaderItems source={animImageSource}/>
        <HomepageLoaderItems source={animImageSource}/>
        <HomepageLoaderItems source={animImageSource}/>
      </div> */}
    </div>
  );
};
export default Home;

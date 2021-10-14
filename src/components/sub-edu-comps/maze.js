import React from 'react';



const Maze = (props) =>{

    const [initialPosYSprite, setInitialPosYSprite] = React.useState()
    const [initialPosXSprite, setInitialPosXSprite] = React.useState()
    const [spriteInUse, setSpriteInUse] = React.useState(false)

    
  const gameLogic = e =>{

  }

  const handlePillarMouseOver = e =>{
      if(spriteInUse){
        window.location.reload()
      }
      
  }


    const handleMouseOver = e => {
        props.handleSpriteInUse()
        setSpriteInUse(true)
        document.onmousemove = function(e) { 
            if(document.getElementById('sprite')){
        
            document.getElementById('sprite').style.left = e.pageX +"px";
            document.getElementById('sprite').style.top  = e.pageY +"px";
            }
            
            
        }
    }

    const initialPositionSet = e =>{
        
        setInitialPosXSprite(document.getElementById('sprite').getBoundingClientRect().x)
            setInitialPosYSprite(document.getElementById('sprite').getBoundingClientRect().y)
            console.log("initialspritepositionset")

    }

    const spriteLeftBoundaries = e =>{
        if(spriteInUse){
            window.location.reload()
        }
    }

    

return <div className="maze-container" onMouseEnter={initialPositionSet} >
    <div className="sprite" onMouseOver={handleMouseOver} id="sprite"></div>
    <div className="left-maze maze-item" onMouseOver={handlePillarMouseOver}></div>
    <div className="center-maze maze-item" onMouseOver={handlePillarMouseOver}></div>
    <div className="right-maze maze-item" onMouseOver={handlePillarMouseOver}></div>
</div>
}
export default Maze;
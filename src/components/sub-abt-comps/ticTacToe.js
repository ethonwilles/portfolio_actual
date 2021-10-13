import React from 'react';
import { useHistory } from 'react-router-dom';



const TicTacToe = (props) =>{
    const history = useHistory()
    const [gameMatrix, setGameMatrix] = React.useState([["","",""],
                                                        ["","",""],
                                                        ["","",""]])
    const [trackClicks, setTrackClicks] = React.useState(0)
    

 const handleBoxClick = e =>{
     
     const classNames = e.target.classList
    
     
    if(e.target.innerHTML == ""){
        console.log(gameMatrix)
        e.target.innerHTML = "X"
        setMatrixItem(classNames)
        setTrackClicks(trackClicks + 1)
        gameBot(e,classNames, trackClicks + 1)
        checkGame()
        
    }
    
 }

 const checkGame = () =>{
     console.log(gameMatrix[0].join())
     if(gameMatrix[0].join() == "X,X,X"){
         history.push("/abt")
     }else if(gameMatrix[0].join() === "O,O,O"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
     }else if(gameMatrix[1].join() === "X,X,X"){
         history.push("/abt")
     }else if(gameMatrix[1].join() === "O,O,O"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
     }else if(gameMatrix[2].join() === "X,X,X"){
         history.push("/abt")
     }else if(gameMatrix[2].join() == "O,O,O"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
     }else if(`${gameMatrix[0][0]}${gameMatrix[1][0]}${gameMatrix[2][0]}` == "XXX"){
        history.push("/abt")
     }else if(`${gameMatrix[0][0]}${gameMatrix[1][0]}${gameMatrix[2][0]}` == "OOO"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
    }else if(`${gameMatrix[0][1]}${gameMatrix[1][1]}${gameMatrix[2][1]}` == "XXX"){
         history.push("/abt")
    }else if(`${gameMatrix[0][1]}${gameMatrix[1][1]}${gameMatrix[2][1]}` == "OOO"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
    }else if(`${gameMatrix[0][2]}${gameMatrix[1][2]}${gameMatrix[2][2]}` == "XXX"){
         history.push("/abt")
    }else if(`${gameMatrix[0][2]}${gameMatrix[1][2]}${gameMatrix[2][2]}` == "OOO"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
    }else if(`${gameMatrix[0][0]}${gameMatrix[1][1]}${gameMatrix[2][2]}` == "XXX"){
         history.push("/abt")
    }else if(`${gameMatrix[0][0]}${gameMatrix[1][1]}${gameMatrix[2][2]}` == "OOO"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
    }else if(`${gameMatrix[0][2]}${gameMatrix[1][1]}${gameMatrix[2][0]}` == "XXX"){
         history.push("/abt")
    }else if(`${gameMatrix[0][2]}${gameMatrix[1][1]}${gameMatrix[2][0]}` == "OOO"){
         props.botWon()
         setTrackClicks(0)
         setGameMatrix([["","",""],
                        ["","",""],
                        ["","",""]
         ])
    }
 }

 const determineBotBoxHTMLChoice = (ranOne, ranTwo) =>{
     
    if(ranOne == 0 && ranTwo == 0){
        document.querySelector(".top-left").innerHTML = "O"
    }else if(ranOne == 0 && ranTwo == 1){
        document.querySelector(".top-center").innerHTML = "O"
    }else if(ranOne == 0 && ranTwo == 2){
        document.querySelector(".top-right").innerHTML = "O"
    }else if(ranOne == 1 && ranTwo == 0){
        document.querySelector(".middle-left").innerHTML = "O"
    }else if(ranOne == 1 && ranTwo == 1){
        document.querySelector(".middle-center").innerHTML = "O"
    }else if(ranOne == 1 && ranTwo == 2){
        document.querySelector(".middle-right").innerHTML = "O"
    }else if(ranOne == 2 && ranTwo == 0){
        document.querySelector(".bottom-left").innerHTML = "O"
    }else if(ranOne == 2 && ranTwo == 1){
        document.querySelector(".bottom-center").innerHTML = "O"
    }else if(ranOne == 2 && ranTwo == 2){
        document.querySelector(".bottom-right").innerHTML = "O"
    }
 }
 const gameBot = (e,classNames, clickTrack) =>{
     
     let rolls;
     const randomVertex = () =>{
         return Math.floor(Math.random() * 3)
     }

     

     const takeTurn = (e, clickTrack) =>{
        console.log(clickTrack)
        
        
            if(clickTrack < 5){
            console.log("rolling..")
            const randomVertOne = randomVertex()
            const randomVertTwo = randomVertex()
            if(gameMatrix[randomVertOne][randomVertTwo] == ""){
                console.log("rolled!")
                gameMatrix[randomVertOne][randomVertTwo] = "O"
                determineBotBoxHTMLChoice(randomVertOne,randomVertTwo)
                
                
            }else if(gameMatrix[randomVertOne][randomVertTwo] !== ""){
                takeTurn(e,clickTrack)
            }
            
        
     }else if(clickTrack == 5){
        setGameMatrix([["","",""],
        ["","",""],
        ["","",""]])
        setTrackClicks(0)
        props.noWin()
     }
    }

     takeTurn(e,clickTrack)




 }


 const setMatrixItem = classNames =>{
     if(classNames.contains("top-left")){
         if(gameMatrix[0][0] == ""){
             gameMatrix[0][0] = "X"
         }
     }else if(classNames.contains("top-center")){
         if(gameMatrix[0][1] == ""){
             gameMatrix[0][1] = "X"
         }
     }else if(classNames.contains("top-right")){
         if(gameMatrix[0][2] == ""){
            gameMatrix[0][2] = "X"
         }
     }else if(classNames.contains("middle-left")){
         if(gameMatrix[1][0] == ""){
             gameMatrix[1][0] = "X"
         }
     }else if(classNames.contains("middle-center")){
         if(gameMatrix[1][1] == ""){
             gameMatrix[1][1] = "X"
         }
     }else if(classNames.contains("middle-right")){
         if(gameMatrix[1][2] == ""){
             gameMatrix[1][2] = "X"
         }
     }else if(classNames.contains("bottom-left")){
         if(gameMatrix[2][0] == ""){
             gameMatrix[2][0] = "X"
         }
     }else if(classNames.contains('bottom-center')){
         if(gameMatrix[2][1] == ""){
             gameMatrix[2][1] = "X"
         }
     }else if(classNames.contains('bottom-right')){
         if(gameMatrix[2][2] == ""){
             gameMatrix[2][2] = "X"
         }
     }
 }



 const handleMouseEnter = e =>{
    if(e.target.innerHTML == ""){
        e.target.style["background-color"] = "lightgreen"
    }else if(e.target.innerHTML != ""){
        e.target.style['background-color'] = '#fd7c72'
    }
 }

 const handleMouseLeave = e =>{
    e.target.style['background-color'] = "white"
 }





return <div className='tic-tac-toe-wrapper'>
    <div className='top-row box-container'>
        <div className="top-left box" onClick={handleBoxClick}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="top-center box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="top-right box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
    </div>
    <div className='middle-row box-container'>
        <div className="middle-left box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="middle-center box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="middle-right box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
    </div>
    <div className='bottom-row box-container'>
        <div className="bottom-left box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="bottom-center box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
        <div className="bottom-right box" onClick={handleBoxClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
    </div>



    
</div>
}
export default TicTacToe;
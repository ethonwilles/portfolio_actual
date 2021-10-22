import React from 'react';
import { useHistory } from 'react-router-dom';




const GamePieces = (props) =>{
    const history = useHistory()

    
    const handleGamePieceClick = e =>{
        
        e.target.classList.remove("activePiece")
        
        
        if(document.querySelectorAll(".activePiece").length <= 0){
            history.push("/contact-me")
        }
    }
    
    const amtOfRows = () =>{
        let array = []
        for(let i = 0; i < 37; i++){
            
            array.push(i)
        }
        
        return array.map(e =>{
            
            return <div className="gamePieceContainer" id={e}>{amtOfPieces()}</div>
        })
    }

    const amtOfPieces = (rowAmt) =>{
        const randCircle = Math.floor(Math.random() * props.amount)
        
        let array = []
        for(let i = 0; i < props.amount; i++){
            
            array.push(i)
        }
        
        return array.map(e =>{
            if(randCircle == e){
                
                return <div className="gamePiece activePiece" id={e} onClick={handleGamePieceClick}></div>
            }
            return <div className="gamePiece" id={e}></div>
        })
    }

    const assignNumber = () =>{
        const arrayOfGamePieces = document.querySelectorAll(".gamePiece")
        let trackAmtPieces = 0
        arrayOfGamePieces.forEach(e =>{
            e.classList.add(trackAmtPieces)
            trackAmtPieces += 1
        })
    }



    
return <div className="contact-game" >
    

<div className="game-pieces-wrapper">
{amtOfRows()}
{assignNumber()}

</div>

    <div className="rules">
        <p>Rules:</p>
        <ul>
            <li>Click a Dot to clean up the screen.</li>
            <li>Clean all the dots off to view my Contact Info!</li>
        </ul>
    </div>
    </div>
}
export default GamePieces;
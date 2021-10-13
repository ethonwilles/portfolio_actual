import React from 'react';
import {Draggable} from "@shopify/draggable"
import { Droppable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
// svg icon imports


//redux
import { useSelector, useDispatch } from 'react-redux';
import { trackElementReset,selectName, trackMouseDown, trackMouseUp, trackMouseReset, trackElementExp, trackElementEdu, trackElementContact, trackElementAbt } from '../../features/counter/counterSlice';




const HomepageLinkItem = (props) =>{
   
    const history = useHistory()
    const elementName = useSelector(selectName).payload.counter.name
    const dispatch = useDispatch()
    

    window.addEventListener('mouseup', e=>{
        if(elementName == ""){
            dispatch(trackMouseReset())
        }else{
            dispatch(trackMouseUp())
            dispatch(trackElementReset())
        }
    }
    )

    const mouseDown = e =>{
        // dispatch(trackMouseDown())
        // if(props.name == "Experience"){
        //     dispatch(trackElementExp())
        // }else if(props.name == "Education"){
        //     dispatch(trackElementEdu())
        // }else if(props.name == "About"){
        //     dispatch(trackElementAbt())
        // }else if(props.name == "Contact"){
        //     dispatch(trackElementContact())
        // }
        
        
    }

    const handleMouseDown = e =>{
        props.handleUrl(props.name)
    }


    //draggable

    const handleDragStart = (e) =>{
      document.querySelector("." + props.name).style['opacity'] = 0
      e.dataTransfer.effectAllowed = 'copyMove'
      e.target.style.cursor = "pointer"
      e.target.dispatchEvent(new Event('click'))
    }
    const handleDragEnd = e =>{
        const itemWrapper = document.querySelector("." + props.name)
        itemWrapper.style["opacity"] = 1
        if(itemWrapper.querySelector("img").classList.contains("over")){
            console.log(props.name, "Adsf")
            if(props.name == "Experience"){
                console.log("exp?")
                window.location.push("/exp")
                
            }
        }





    }

    
    


    
    
return <div onDragStart={handleDragStart} onDragEnd={handleDragEnd} className={props.optionalClassName} id={props.optionalClassName} onMouseDown={handleMouseDown}>
    <div className='item-wrapper-container draggable' id="item-wrapper-container">
<img src={props.imgSrc} alt={props.name}/>
<p>{props.name}</p>
</div>
</div>
}
export default HomepageLinkItem;
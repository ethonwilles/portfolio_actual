import React from 'react';

// svg icon imports



const HomepageLinkItem = (props) =>{
    
    const checkName = () =>{
        if(props.name === "Education" || props.name === "Contact"){
            return true
        }else{
            return false
        }
    }
return <div className="item-wrapper" >
<img src={props.imgSrc} alt={props.name}/>
<p>{props.name}</p>
</div>
}
export default HomepageLinkItem;
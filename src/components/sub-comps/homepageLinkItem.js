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
return <div className={props.optionalClassName}>
    <div className='item-wrapper-container'>
<img src={props.imgSrc} alt={props.name}/>
<p>{props.name}</p>
</div>
</div>
}
export default HomepageLinkItem;
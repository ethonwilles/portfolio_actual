import React from 'react';
import { Link } from "react-router-dom";
import backArrow from "../assets/homepage_icons/backarrow.svg"

const BackBar = () =>{

return <div className="backbar">
<Link className="back-link-wrapper" to="/">
<img src={backArrow} alt="backArrow"/>
<h1>Back</h1>
</Link>
</div>
}
export default BackBar;
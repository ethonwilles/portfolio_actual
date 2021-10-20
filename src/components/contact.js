import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";
import BackBar from "./backBar";
import NavBar from "./navbar";
import Matching from "./sub-contact-comps/matching";
const Contact = () => {
  return (
    <div className="contact">
     <BackBar />
     <Matching />
     
    </div>
  );
};
export default Contact;

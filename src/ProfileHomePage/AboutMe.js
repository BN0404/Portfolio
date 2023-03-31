import React from "react";
import { Container } from "react-bootstrap";
// import Bhagwati_Nagarkoti_Resume from "../assest/Bhagwati_Nagarkoti_Resume.pdf";
// import "./App.css";


function AboutMe() {
  return (
    <container className="aboutMe">
    <h1> About Me</h1>
      <div className="qualification">
      <img class="background" src="https://web-static.wrike.com/blog/content/uploads/2014/09/iStock-654454404-e1511259452480.jpg?av=7583717527279757003df94b1a6336e4"/>
        <h2> Qualification</h2> 
        <ul className="am">
        <li>Per Scholas Software Engineering</li>
          <li> Bachelors in Electronics</li>
          <li> Masters in Operational Research </li>
          <li> Bachelors in Education </li>
        </ul>
    </div>
      
      <div className="experience">
        <ul className="bm">
          <h2> Experience</h2>
          <li> QA Analyst</li>
          <li> Teacher</li>
          <li> Manual Tester</li>
        </ul>
</div>

{/* 
      <div>
        <a
          href={Bhagwati_Nagarkoti_Resume}
          download={Bhagwati_Nagarkoti_Resume}>
          Resume
        </a>
      </div> */}

  
    </container>
  );
}

export default AboutMe;

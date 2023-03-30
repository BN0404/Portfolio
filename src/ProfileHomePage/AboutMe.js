import React from "react";
// import Bhagwati_Nagarkoti_Resume from "../assest/Bhagwati_Nagarkoti_Resume.pdf";
// import "./App.css";

function AboutMe() {
  return (
    <div>
    <h1> About Me</h1>
      <div className="qualification">
        <h2> Qualification</h2> 
        <ul>
          <li> Bachelors in Electronics</li>
          <li> Masters in Operational Research </li>
          <li> Bachelors in Education </li>
        </ul>
    </div>
      
      <div className="experience">
        <ul>
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

            
    </div>
  );
}

export default AboutMe;

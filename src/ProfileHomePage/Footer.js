import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";


function Footer() {

    return (
    
        <div className="footer"> 
            

            <a href= "https://www.facebook.com/ghugtyalindu" ><FaFacebook className="icon facebook" /></a>
         
            <a href="https://www.linkedin.com/in/bhagwati-nagarkoti-168b73265"> <FaLinkedin className="icon linkedin" /> </a>
            <a href ="https://github.com/BN0404/BN0404.github.io">
            <FaGithub className="icon github"/> </a>
  
    </div>
        )
}

export default Footer;
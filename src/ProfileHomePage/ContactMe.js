import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import { FaBootstrap } from "react-icons/fa";

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jal6zpq', 'template_dshjft6', form.current, '9bdk4ruIrIlwXsltA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
      };

    return (
        <div className="form">
            <h1> Contact Me</h1>
            <form ref={form}
            onSubmit={sendEmail}>
                <div> <h3>Name:</h3> <input type="text" placeholder="Name" name="user_name"required/> </div>
                <div> <h3>Email:</h3><input type="email" placeholder="Email" name="user_email" required />
                <i class=" bx bx-user"></i></div>
                <div> <h3>Subject:</h3><input type="text" placeholder="subject" name="subject" required /> </div>

                <div> <h3>Short Message:</h3><textarea name="short message" cols="20" rows="10"></textarea> </div>
                
                {/* <button type="submit" className="--btn"> Send Message </button> */}
<div className="ms-auto">
                <button className="btn btn-success"> Submit</button>
                </div>
            </form>
           
            <Footer />
        </div>
    
    )
}

export default ContactMe;
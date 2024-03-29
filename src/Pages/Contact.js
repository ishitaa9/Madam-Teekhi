import React from "react";
import "../styles/Contact.css";
import Teekhi2 from "../assets/teekhi2.png";


function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        // style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us <img src={Teekhi2} width={50} height={50} className="teekhi-img-contact" alt=""/></h1>
        <div id="contact-form" method="POST">
          <p>For inquiries, partnerships, or to experience the delectable taste of Madam Teekhi
              Hot Garlic Sauce, please reach out to us at:
              <br/><br />
             <span><b>Email:</b> <br/>contact@madamteekhi.com</span>
             <br/><br/>
              <span><b>Instagram:</b><br/>@madam.teekhi</span>
              <br/><br/>
              <span><b>Mobile:</b><br/>9205055459</span>
              <br/><br/>
              Join us in savoring the flavors of tradition and innovation with Madam Teekhi sauce!
              </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
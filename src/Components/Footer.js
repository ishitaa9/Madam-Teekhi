import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="rounded-social-buttons">
        <a href="https://www.facebook.com/profile.php?id=100093049107722&mibextid=LQQJ4d" target="_blank" className="social-button facebook"> <i className="fa fa-facebook-f"></i> </a>
        <a href="https://instagram.com/madam.teekhi?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" className="social-button instagram"> <i className="fa fa-instagram"></i></a>
      </div>
      <p> &copy;madamteekhi.com</p>
    </div>
  );
}

export default Footer;
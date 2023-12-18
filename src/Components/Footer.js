import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://instagram.com/madam.teekhi?igshid=OGQ5ZDc2ODk2ZA==">
        <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100093049107722&mibextid=LQQJ4d">
        <FacebookIcon />
        </a>
      </div>
      <p> &copy;madamteekhi.com 2023</p>
    </div>
  );
}

export default Footer;
import React from "react";
import MultiplePizzas from "../assets/Banner.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> About Us</h1>
        <p>
        <em>Madam Teekhi Hot Garlic Sauce is the embodiment of out family's culinary heritage. Crafted using a secret recipe
         passed down for generations, this sauce combines the bold flavours of garlic with a tantalising heat that lingers
         on the palate. Versatile and incredibly delicious, out sauce can be used as a marinade, dip or condiment, adding a flavourful
         kick to any dish. It's the perfect blend of tradition and innovation, capturing the essence of our cultural roots while catering
         to modern taste preferences.</em>
        </p>
        <br/> <br/>
        <p>
        <em>Our mission is to infuse contemporary taste with timeless tradition,
        offering food enthusiasts an authentic and delightful experience that transcends cultures and
        borders. We believe that good food has the power to connect people, evoke memories, and
        create new moments to cherish.</em>
        </p>
        <br/><br/>
        <h2>Certificates and Licenses</h2>
          <a class="btn" href="https://drive.google.com/file/d/1vs1CtHMNVuP5cQtdx15dL_bQgbdMf5DS/view?usp=sharing" target="_blank">
          Shelf Life
          </a>
        <br/>
          <a className="btn" href="https://drive.google.com/file/d/1kNa9hf-IBkMeVlOQVmHOhs4BIUqVim6Z/view?usp=sharing" target="_blank">
          Nutritional Analysis
          </a>
        <br/>
        <a className="btn" href="https://drive.google.com/file/d/1CYDV8cAklL89atn2sHb4vlDayl8A5lvy/view?usp=sharing" target="_blank">
          Udyam Registration Certificate
          </a>
        <br/>
      </div>
      <div>
      </div>
    </div>
  );
}

export default About;
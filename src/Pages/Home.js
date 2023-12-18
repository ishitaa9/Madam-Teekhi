import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Banner.jpeg";
import "../styles/Home.css";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import video1 from "../assets/video1.mp4";








function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Madam Teekhi </h1>
        <p> ONE DIP AT A TIME FIRING UP EVERY BITE</p>
        <Link to="/contact">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
    <br/>
    <h2>Photo Gallery</h2>
    <br/>
    <div class="scroll-container">
      <img src={image2} width="300" height="400"/>
      <img src={image3} width="300" height="400"/>
      <img src={image5} width="300" height="400"/>
      <img src={image6} width="300" height="400"/>
      <img src={image7} width="300" height="400"/>
      <img src={image5} width="300" height="400"/>
      <img src={image1} width="300" height="400"/>
      <img src={image9} width="300" height="400"/>
      <img src={image8} width="300" height="400"/>
      <video width="300" height="400" controls className="vid">
      <source src={video1} type="video/mp4"/>
    </video>
    </div>
    <br/>
    </>
  );
}

export default Home;
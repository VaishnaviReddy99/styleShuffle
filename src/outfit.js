import Navbar from "./Navbar";
import "./outfit.css";
import React, { useState } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
function Outfit() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked); // Toggle like state
  };
  const handleDislike = () => {
    setLiked(false); // Reset like state on dislike
  };
  return (
    <div className="App">
      <Navbar />
      <div className="outfit-container">
        <div className="image-container">
          <h2>Here is your Ourtfit</h2>
          <img
            src={require("./assets/outfits/summerOutfit.jpg")}
            alt={"simpleImage"}
          />
        </div>
        <div className="buttons-container">
          <AiFillLike color="black" size="30" onClick={handleLike} />
          <br />

          <AiFillDislike color="gray" size="30" onClick={handleDislike} />
        </div>
      </div>
    </div>
  );
}

export default Outfit;

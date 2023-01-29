import React from "react";
import {imgSrc} from "../static";

function Header() {
  return (
    <div className="header">
    		<img src={imgSrc.HeaderMeme} /><h3>Meme Generator</h3>
    </div>
  );
};

export {Header};
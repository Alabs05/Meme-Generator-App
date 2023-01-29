import React, {useState, useEffect} from "react";
import {imgSrc} from "../static";

function Meme() {
    const [allMeme, setAllMeme] = useState([]);
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: imgSrc.meme
    })

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(
            prevMeme => ({
                ...prevMeme,
                [name]: value
            })
        )
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))               
    }, [])

	function getMemeImg() {
		const memesArray = allMeme;
		const randomNumber = Math.floor(Math.random() * memesArray.length);
		const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url,
                topText: "",
                bottomText: ""
            }
        });
	}

  return (
    <div className="meme">
    	<div className="meme_top">
    		<input 
    			type="text" 
    			className="meme_topLeft"
    			placeholder="Top text"
                name="topText"
                value={meme.topText}
    			onChange={handleChange}
    		>
    		</input>
    		<input 
    			type="text" 
                name="bottomText"
    			className="meme_topRight"
    			onChange={handleChange}
                value={meme.bottomText}
    			placeholder="Bottom text"
    		>
    		</input>
    	</div>
    	<div className="meme_mid">
    		<button onClick={getMemeImg} >
    		<p>Get a new image</p>
    		</button>
    	</div>
    	<div className="meme_bottom">
    		<img src={meme.randomImage} alt="" className="meme_bottom-img" />
    		<h3 className="TopT">{meme.topText.toUpperCase()}</h3>
    		<h3 className="BotT">{meme.bottomText.toUpperCase()}</h3>
    	</div>

    </div>
  );
};

export {Meme}; 
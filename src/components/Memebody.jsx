import React from"react"
import './meme.css'
// import memesData from "./memesData"
import { useEffect } from 'react'

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
   
    //  const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        "topText": "",
        "bottomText":"",
        "randomImage": "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeData, setAllMemeData]= React.useState([])
    //making a call to an external API
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeData(data.data.memes))
    }, [])
    console.log(allMemeData)

    
    function getMemeImage() {
       
        const randomNumber = Math.floor(Math.random() * allMemeData.length)
        const url = allMemeData[randomNumber].url 
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}>
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image"  alt=""/>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
import React from "react"
import './meme.css'
import image from './images/troll-face.png'
import Meme from "./Memebody"

export default function Header() {
  //how to make an API call
  const [starData, setStarData]= React.useState()
  
    return (
        <div>
        <header className="header">
            <img 
                src={image} alt="meme-face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
        <Meme/>
        </div>
        
    )
}
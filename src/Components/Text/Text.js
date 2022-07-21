import React from 'react'
import './Text.css'
import getApi from '../../services/api'
import { useState, useEffect } from 'react'

import {FaTwitter} from 'react-icons/fa'
import {GrTumblr} from 'react-icons/gr'

const Text = () => {

    const [newQuote, setNewQuote] = useState([])
    const [color, newColor] = useState();
    
    const getNewQuote = () => {
    
        getApi().then((data) =>{
            let i = Math.round(Math.random() * 1600)
            setNewQuote(data[i])      
        })

    }

    const getNewColor = () => {

        var colors = [
            '#16a085',
            '#27ae60',
            '#2c3e50',
            '#f39c12',
            '#e74c3c',
            '#9b59b6',
            '#FB6964',
            '#342224',
            '#472E32',
            '#BDBB99',
            '#77B1A9',
            '#73A857'
          ];
        
        let finalColor = colors[Math.round(Math.random() * 12)]

        const background = document.querySelector('.container')
        const text = document.querySelector('#text')
        const author = document.querySelector('#author')
        const border = document.querySelectorAll('.icons-border')
        const button = document.querySelector('#new-quote')

        background.style.backgroundColor = finalColor
        text.style.color = finalColor
        author.style.color = finalColor

        border.forEach((target) => {
            target.style.backgroundColor = finalColor
        })

        button.style.backgroundColor = finalColor

    }


    const handleClick = () => {
        getNewQuote();
        getNewColor();
    }

    useEffect(() => {
        getNewQuote()
        getNewColor()
    },[])

  return (
    <>
        <div>
            <p id='text'>{newQuote.text}</p>
            <div id="author-container">
                <p id='author'>{`- ${newQuote.author}`}</p>
            </div>
        </div>
        <div id="quotes">
            <div id="icons">
                <a className='icons-border' href={`https://twitter.com/intent/tweet?text=${newQuote.text}%0a-%20${newQuote.author}`} >
                    <FaTwitter id='twitter'/>
                </a>
                <a className='icons-border'>
                    <GrTumblr id='tumblr'/>
                </a>
            </div>
        <button id="new-quote" onClick={() => handleClick()}>New Quote</button>
        </div>
    </>
  )
}

export default Text
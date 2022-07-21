import React from 'react'
import './QuoteBox.css'
import Text from '../Text/Text'

const QuoteBox = () => {
  return (
   <div className="container">
     <div id="quote-box">
        <Text />
     </div>
     <p id='footer'>
          Developed by <a href='https://github.com/enzobocalon' target='__blank'><span>Enzo Bocalon </span></a>
          for the <a 
          href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine" 
          target='__blank'><span id='freecode'>freeCodeCamp Challenge</span></a>
      </p>
   </div>
  )
}

export default QuoteBox
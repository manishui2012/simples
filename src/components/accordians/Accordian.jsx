import React, { useState } from 'react'


const Accordian = ({question, answer}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    
        <div className='items'>
            <div className='title' onClick={() => setIsActive(!isActive)}>
                <h2>{question}</h2><span> {isActive ? "-" : "+"} </span>
            </div>
            {
                isActive && (<div className='content'><p>{answer}</p></div>)
            }
        </div>
   
  )
}

export default Accordian

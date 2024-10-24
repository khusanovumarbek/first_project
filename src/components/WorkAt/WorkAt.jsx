import React from 'react'
import './WorkAt.css'
import icon2 from '../../img/icon2.png'
import amico from '../../img/amico.png'
import { Link } from 'react-router-dom'

const WorkAt = () => {
  return (
    <div className="Container">
      <div className="texts">
        <div className="text">
          <h1>Work  at the speed <br />of thought</h1><br />
          <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine ournextuserexperience.</p><br /><br />
          <div className="butn">
          <button className='btnn'>Get started</button>
          <img src={icon2} alt="" /><Link className='btn  '> Watch the</Link>
        </div>
        
        </div>

      </div>
      <div className="img"><img src={amico} alt="" /></div>
    </div>
  )
}

export default WorkAt

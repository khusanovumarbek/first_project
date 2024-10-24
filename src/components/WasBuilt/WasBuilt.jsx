import React from 'react'
import './WasBuilt.css'
import icon3 from '../../img/icon3.png'
import icon4 from '../../img/icon4.png'
import icon5 from '../../img/icon5.png'
import icon6 from '../../img/icon6.png'
// import bg from '../../img/BG.png'

const WasBuilt = () => {
  return (
    <div className="Container">
      <div className="WasBuilt">
      <div className="text">
        <h1>Product  was Built Specifically  for You</h1>
      </div>


      <div className="icons">
        
        <div className="vector">
          <img src={icon3} alt="" /> <br />
          <h1>First click tests</h1><br />
          <p>While most people enjoy <br /> casino gambling,</p>
        </div>

        <div className="vector">
          <img src={icon4} alt="" /> <br />
          <h1>Design surveys</h1><br />
          <p>Sports betting, lottery and <br /> bingo playing for the fun</p>
        </div>

        <div className="vector">
          <img src={icon5} alt="" /> <br />
          <h1>Preference tests</h1><br />
          <p>The Myspace page defines <br /> the individual.</p>
        </div>

        <div className="vector">
          <img src={icon6} alt="" /> <br />
          <h1>Five second tests</h1><br />
          <p>Personal choices and the <br /> overall personality of the <br /> person. </p>
        </div>
      </div>
      <div className="buton">
          <button className='btnn'>SIGN UP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default WasBuilt

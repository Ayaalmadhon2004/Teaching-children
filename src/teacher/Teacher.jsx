import React from 'react'
import "./teacher.css"
import pic1 from "../teacher.jpg"

const Teacher = () => {
  return (
    <>
     <div className="contT section">
        <div className="rightT">
          <img src={pic1}/>
        </div>
        <div className="leftT">
          <h2>Become A Teacher</h2>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.<br/> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,<br/> sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <button>Get Started Now   <i class="fa-solid fa-arrow-right"></i></button>
        </div>
     </div>
    </>
  )
}

export default Teacher

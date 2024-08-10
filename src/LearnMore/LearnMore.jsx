import React from 'react'
import "./learnMore.css"
import pic1 from "../kid1.jpg"
import pic2 from "../kid2.jpg"
import pic3 from "../person.jpg"

const LearnMore = () => {
  return (
    <>
    <div className="contL section1">
        <div className="rightL">
          <h2>Learn More About Our Work And Our Cultural Activities</h2>
          <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.<br/> Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet<br/>
           Stet no et lorem dolor et diam, amet duo ut dolore vero eos.<br/> No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at,<br/> sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam.<br/> Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
           <div className="rightContL">
            <button className='btn'>Read More</button>
             <div className="subContRightL">
                <img src={pic3}/>
                 <h3>Jhon Doe <br/><span>CEO & Founder</span></h3>
             </div>
           </div>
        </div>
        <div className="leftL">
            <div className="sectionL1">
            <img src={pic1} />
            </div>
            <div className="sectionL2">
              <img src={pic2}/>
              <img src={pic1}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default LearnMore

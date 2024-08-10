import React from 'react'
import "./appoitment.css"
import pic1 from "../kids5.jpg";

const Appoitment = () => {
  return (
    <>
    <div className="contA">
        <div className="rightA">
          <h2>Make Appointment</h2>
          <form>
            <div>
            <input type="text" placeholder='Gurdian Name'/>
            <input type="email" placeholder="Gurdian Email"/>
            </div>
            <div>
                <input type="text" placeholder='Child Name'/>
                <input type="number" placeholder="Child Age"/>
            </div>
            <div>
                <textarea placeholder='Message'/>
            </div>
            <div>
                <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="leftA">
           <img src={pic1} />
        </div>
    </div>
    </>
  )
}

export default Appoitment

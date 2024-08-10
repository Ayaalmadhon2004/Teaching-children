import React from 'react'
import pic1 from "../person1.jpg"
import pic2 from "../person.jpg"
import pic3 from "../person2.jpg"
import "./poupular.css"

const Popular = () => {
  return (
    <>
    <div className="contP section">
        <div className="textP">
        <h2>Popular Teacher</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque dolores commodi quam possimus a ad ipsam, aliquam magni, sit ducimus ea? Ipsa accusantium quis inventore perferendis fugiat enim illum consequatur.</p>
        </div>
        <div className="personP">
            <div className="sub-personP sub-personP1">
                <img src={pic1}/>
                   <div className="sub-sub-person">
                <h2>Lio Liam</h2>
                <p>Designer</p>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
            </div>
            <div className="sub-personP sub-personP2">
                <img src={pic2}/>
                <div className="sub-sub-person">
                <h2>Ayman Liam</h2>
                <p>Designer</p>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
            </div>
            <div className="sub-personP sub-personP3">
                <img src={pic3}/>
                <div className="sub-sub-person">
                <h2>Haya Liam</h2>
                <p>Designer</p>
                <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-facebook-messenger"></i>
                <i class="fa-brands fa-instagram"></i>
                </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Popular

import React from 'react'
import "./footer.css"
import pic1 from "../kids5.jpg"
import pic2 from "../kids4.jpg"
import pic3 from "../kids3.jpg"
import pic4 from "../kids22.jpg"
import pic5 from "../kid1.jpg"
import pic6 from "../kids11.jpg"
const Footer = () => {
  return (
    <>
    <div className="contF section">
        <div className="sectionF1">
          <h2>Get In Touch</h2>
          <p><i class="fa-solid fa-location-dot"></i>123 Street, New York, USA</p>
          <p><i class="fa-solid fa-phone"></i>+012 345 67890</p>
          <p><i class="fa-regular fa-message"></i>info@example.com</p>
             <div className="f1Icons">
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-facebook-messenger"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-instalod"></i>
             </div>
        </div>
        <div className="sectionF2">
            <h2>Quick Links</h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our services</li>
              <li>Policy</li>
              <li>Terms & Conditions</li>
              <li></li>
            </ul>
        </div>
        <div className="sectionF3">
           <h2>Photo Gallery</h2>
            <div>
              <img src={pic1}/>
              <img src={pic2}/>
              <img src={pic3}/>
            </div>
            <div>
              <img src={pic4}/>
              <img src={pic5}/>
              <img src={pic6}/>
            </div>
        </div>
        <div className="sectionF4">
             <h2>Newsletter</h2>
             <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
             <input type="Email" placeholder='email'/>
        </div>
    </div>
    </>
  )
}

export default Footer

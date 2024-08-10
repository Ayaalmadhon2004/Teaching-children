import React from 'react';
import "./classes.css";
import pic1 from "../kids11.jpg";
import pic2 from "../kids22.jpg";
import pic3 from "../kids3.jpg";
import pic4 from "../kids4.jpg";
import pic5 from "../kid2.jpg";
import pic7 from "../kid1.jpg";
import pic6 from "../person.jpg";

const Classes = () => {
  return (
    <>
      <div className="contC ">
        <h1>School Classes</h1>
        <p>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>
        <div className="boxes">
          <div className="box">
            <img src={pic1} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
          <div className="box">
            <img src={pic2} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
          <div className="box">
            <img src={pic3} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
          <div className="box">
            <img src={pic4} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
          <div className="box">
            <img src={pic5} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
          <div className="box">
            <img src={pic7} alt="Art & Drawing" />
            <h2>Art & Drawing</h2>
            <div className="sub-box">
              <img src={pic6} alt="Teacher" />
              <p>John Doe<br />Teacher</p>
              <button>$99</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classes;

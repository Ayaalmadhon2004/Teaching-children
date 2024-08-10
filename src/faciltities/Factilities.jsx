import React from 'react';
import "./factilities.css";

const Factilities = () => {
  return (
    <div className="contFa section">
      <div className="textFa">
        <h1>School Facilities</h1>
        <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
      </div>
      <div className="sub-contFa">
      <div className="subFa subFa1">
        <i className="fa-solid fa-bus"></i>
        <div className="subSub">
        <h2>School Bus</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      </div>
      <div className="subFa subFa2">
        <i className="fa-solid fa-book"></i>
        <h2>Library</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="subFa subFa3">
        <i className="fa-solid fa-utensils"></i>
        <h2>Cafeteria</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="subFa subFa4">
        <i className="fa-solid fa-futbol"></i>
        <h2>Sports Facilities</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      </div>
    </div>
  );
}

export default Factilities;

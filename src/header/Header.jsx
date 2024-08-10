import React from 'react';
import pic from '../kid1.jpg';
import pic2 from '../kid2.jpg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./header.css"

const Header = () => {
    return (
        <>
            <Slide className="each-slide-effect">
                <div className="background background1">
                    <h1>Make a bright future for your Child</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit<br/>. Dicta a, illo nostrum consectetur architecto,<br/> fugit exercitationem cumque excepturi tempora quasi voluptates velit iste delectus <br/>incidunt dolorum eos voluptatibus soluta itaque.</p>
                    <div className="btns">
                        <button className='btn'>Learn more</button>
                        <button className='btn2'>Our Classes</button>
                    </div>
                </div>
                <div className="background background2">
                    <h1>Make a bright future for your Child</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit<br/>. Dicta a, illo nostrum consectetur architecto,<br/> fugit exercitationem cumque excepturi tempora quasi voluptates velit iste delectus <br/>incidunt dolorum eos voluptatibus soluta itaque.</p>
                    <div className="btns">
                        <button className='btn'>Learn more</button>
                        <button className='btn2'>Our Classes</button>
                    </div>
                </div>
            </Slide>
        </>
    );
}

export default Header;

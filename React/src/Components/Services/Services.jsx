import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';

const Services = () => {
  return (
    <div className="services">
        <div className="awesome">
            <span className="s-awesome">My Awesome</span>
            <span className="s-services">Services</span>
            <span className="s-description">
Full stack development refers to the end-to-end application software development, including the front end and back end. The front end consists of the user interface, and the back end takes care of th
</span>
        <button className="button s-button">
            Download CV
        </button>

        <div className="blur s-blur" style={{background: '#ABF1FF94'}}></div>

        </div>

        <div className="cards">
                AT right Side
        </div>
    </div>
  )
}

export default Services
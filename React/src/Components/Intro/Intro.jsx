import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
// import Thumbup from '../../img/thumbup.png';
// import Crown from '../../img/crown.png';
// import Glassesimoji from '../../img/glassesimoji.png';

const Intro = () =>{
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span className="i-hy">Hy ! I am</span>
                    <span className="i-actualName">Paras Luvani</span>
                    <span className="i-description"> Full Stack Developer with high level of experience in web development,producing the Quality work.</span>
                </div>
            <button class="button i-button"> Hire Me </button>


            <div className="i-icons">
                <a target="_blank" rel="noreferrer" href="https://github.com/luvaniparas" >
                    <img src={Github} alt="github" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/paras-luvani-733391180/" >
                    <img src={LinkedIn} alt="linkedIn" />
                </a>

                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/paras_luvani/" >
                    <img src={Instagram} alt="instagram" />
                </a>
            </div>

            </div>

            <div className="i-right">
                <img className="i-Vector1" src={Vector1} alt="Vector1" />
                <img className="i-Vector2" src={Vector2} alt="Vector2" />
                <img className="i-Boy" src={Boy} alt="Boy" />
                {/* <img src={Thumbup} alt="Thumbup" />
                <img src={Crown} alt="Crown" />
                <img src={Glassesimoji} alt="Glassesimoji" /> */}
            </div>
        </div>
    )
}

export default Intro;
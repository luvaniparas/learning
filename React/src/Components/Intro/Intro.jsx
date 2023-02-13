import React from 'react';
import FloatingDiv from '../FloatingDiv/FloatingDev.jsx';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import Thumbup from '../../img/thumbup.png';

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
                <img className="i-Glassesimoji" src={Glassesimoji} alt="Glassesimoji" />

                <div style={{top:'-4%',left:'68%'}}>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
                </div>

                <div style={{top:'18rem',left: '0rem'}}>
                    <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award"/>
                </div>

                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>

                <div className="blur" style={{background: "#C1F5FF",top: '17rem', width: '21rem',height:'11rem',left:"-9rem"}}></div>
            </div>
        </div>
    )
}

export default Intro;
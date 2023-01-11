import './home.css';
import home_image from '../../images/home_image.png';
import resume from '../../documents/Nirmal_Chaudhari_SE_Resume.pdf';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import Binary from '../moving/moving';


import React from 'react';


function Home(){
    return(
        <section id="home">
            <Binary />
            <div className="network">
                <ul id="netul">
                    <li><a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"><img id="linkedin" alt="LinkedIn_img" src={linkedin} href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"></img></a></li>
                    <li><h2 id="logo">NC</h2></li>
                    <li><a target="_blank"  rel="noreferrer" href="https://github.com/Nirmal-code"><img id="github" alt="Github_img" src={github} href="https://github.com/Nirmal-code"></img></a></li>
                </ul>
            </div>
            <div className="title">
                <h1 id="intr">Hi, I'm</h1>
                <h1 id="greeting"><br/>Nirmal Chaudhari<br/>&lt;Software Student&gt;</h1>
                <h3 id="des">Skilled at developing, testing, and implementing efficient codes to perform various tasks</h3>
                <h3 id="blinker">|</h3>
                <br />
                <br />
                <a href={resume} id="resume" download>Download Resume</a>
                <a href="mailto: nirmal.chaudhari2003@gmail.com" id="resume">✉</a>
            </div>
            <img src={home_image} id="main_image" alt="my_bitmoji"></img>


        </section>

    );
}

export default Home;
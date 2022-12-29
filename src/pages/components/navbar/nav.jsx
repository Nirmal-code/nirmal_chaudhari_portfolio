import React from 'react';
import './nav.css';

import home from '../../images/home.png';
import about from '../../images/about.png';
import skills from '../../images/skills.png';
import projects from'../../images/projects.png';
import experience from'../../images/experience.png';
import {useState} from "react";




function navbar(){
    return(
        <div className="nav">
            <ul id="main_nav">
                <li><a href="#home"><img id="home" src={home}></img></a></li>
                <li><a href=""><img id="about" src={about}></img></a></li>
                <li><a><img id="skills" src={skills}></img></a></li>
                <li><a><img id="projects" src={projects}></img></a></li>
                <li><a><img id="experience" src={experience}></img></a></li>
            </ul>
        </div>
    );
}


export default navbar;
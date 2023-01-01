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
            <a href="#home"><img src={home}></img></a>
            <a href="#about"><img src={about}></img></a>
            <a href="#skills"><img src={skills}></img></a>
            <a><img src={projects}></img></a>
            <a><img src={experience}></img></a>
        </div>
    );
}


export default navbar;
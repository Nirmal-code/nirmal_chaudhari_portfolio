import React from 'react';
import './nav.css';

import home from '../../images/home.png';
import about from '../../images/about.png';
import skills from '../../images/skills.png';
import projects from'../../images/projects.png';
import experience from'../../images/experience.png';
import {useState} from 'react';




function Navbar(){
    const[currNav, setCurrNav]=useState('#home')
    return(
        <div className="nav">
            <a href="#home"  onClick={()=>setCurrNav('#home')}><img alt="home" src={home} className={currNav==="#home"?'active':''}></img></a>
            <a href="#about" onClick={()=>setCurrNav('#about')}><img alt="about" src={about} className={currNav==="#about"?'active':''}></img></a>
            <a href="#skills" onClick={()=>setCurrNav('#skills')}><img alt="skills"src={skills} className={currNav==="#skills"?'active':''}></img></a>
            <a href="#projects" onClick={()=>setCurrNav('#projects')}><img alt="projects" src={projects} className={currNav==="#projects"?'active':''}></img></a>
            <a href="#experience" onClick={()=>setCurrNav('#experience')}><img alt="experience" src={experience} className={currNav==="#experience"?'active':''}></img></a>
        </div>
    );
}


export default Navbar;
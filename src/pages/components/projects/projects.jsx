import React from "react";
import './projects.css';
import macademy from '../../images/macademy.png';
import pong from '../../images/pong.png';
import qarm from '../../images/q_arm.png';
import humans from '../../images/humans.png';
import P13 from '../../images/other_projects.png';
import github from '../../images/github.png';
import exter from '../../images/exter_link.png';



function ProjectItem(props){
    return(
        <div className="proj_item">
            <img src={props.image} id="picture" alt="proj_image"></img>
            <h1 id="name">{props.name}</h1>
            <h2 id="date">{props.date}</h2>
            <p id="proj_des">{props.des}</p>
            <a target="_blank"  rel="noreferrer" href={props.url}><img id="github_2" alt="Github_img" src={props.icon} href="https://github.com/Nirmal-code"></img></a>

        </div>
    )
}


function Projects(){
    return(
        <section id="projects">
            <h2 id="ttl">&lt;Projects /&gt;</h2>
            <div className="proj_wrapper">
                <ProjectItem name="Macademy" date="Aug 2022" icon={github} image={macademy} url="https://github.com/Nirmal-code/Macademy" des="Website developed to help students develop more effective study habits. Features a planner page for students to track course work, and interval studying. Developed using React.js, Node.js, HTML and CSS"/>
                <ProjectItem name="Pong" date="Jan 2020" icon={github} image={pong} url="https://github.com/Nirmal-code/pong_game" des="2-Player game developed for people to play on their devices. Contains point system for users to keep score of who is winning. Developed using Lua through Love2D software. "/>
                <ProjectItem name="Q-Arm Project" date="Nov 2021" icon={github} image={qarm} url="https://github.com/Nirmal-code/Q-Arm_Project" des="Programmed a Q-Arm to work in surgical environments to sterilize equipment for use by responding to muscle sensor emulators. Developed using Python and a Raspberry Pi. "/>
                <ProjectItem name="Humans Project" date="Feb 2022" icon={github} image={humans} url="https://github.com/Nirmal-code/Humans-Project" des="Collaborated as a group of over 6 people in SFL to develop a website that helps give a voice to influential people in our socieity. Completed using React.js, Node.js, HTML and CSS."/>
                <ProjectItem name="Eng 1P13 Projects" date="Sep 2021-Apr 2022" icon={exter} image={P13} url="https://abalone-bowler-f8e.notion.site/Nirmal-Chaudhari-6d456ba722de443eb8f0046fa48bbd7f" des="Various projects I worked on in groups of 4-5 as part of my Eng 1P13 course in first year. Developed skills in Engineering Design, Python, AutoCAD, PrusaSlicer, Report Writing."/>
        
            </div>
        </section>
    );
}


export default Projects;
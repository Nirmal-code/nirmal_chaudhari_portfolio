import React from "react";
import './experience.css';
import gdsc from '../../images/gdsc.png';
import ses from '../../images/SES.png';
import archway from '../../images/archway.png';
import macchanger from '../../images/macchanger.png';
import sfl from '../../images/sfl.png';
import uclub from '../../images/uclub.png';
import electric from '../../images/formulaelectric.png';



import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Navigation} from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";


function Slide(props){
    return(
        <SwiperSlide className={props.class_name}>
            <h3 className="company_name">{props.title}</h3>
            <h5 className="date">{props.date}</h5>
            <div className="exp_description">
                <img src={props.url} id="exp_img"></img>
                <p id="exp_des">{props.info}</p>
            </div>
    
        </SwiperSlide>

    );
}



function Experience(){
    
    return(
        <section id="experience">
            <h2 id="ttl">&lt;Experience /&gt;</h2>

            <h1 id="exp_ttl">&gt;Technical Experience</h1>
            <br />

            <Swiper 
            className="leadership_wrap"
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable:true}}>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={sfl} date="Software Developer | Sept 2021-Current" info="Collaborated with experienced programmers through GitHub and Slack to develop websites for various clients. Developed my skills as a frontend developer using JavaScript frameworks React.js and Next.js by regularly developing web components. Published websites using Gatsby Cloud by connecting it to GitHub repositories. " title="Software for Love" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={uclub} date="Frontend Developer | July 2022-Sept 2022" info="Collaborated with people in North America as a frontend developer using the Slack environment to help students find resources more easily. Developed user interactive webpages using React.js library, HTML and CSS. Worked with the backend team to smoothly integrate frontend with backend components." title="uClub" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={electric} date="Software & Vehicle Controls | Oct 2021-June 2022" info="Programmed a car's microcontrollers to adjust values of registers using C to ensure that car components interact accurately. Collaborated with other experienced programmers using the MATLAB and Simulink environments to create C programs using various cells in control systems." title="Mac Formula Electric" />
                </SwiperSlide>
            </Swiper>

            <h1 id="exp_ttl">&gt;Leadership Experience</h1>
            <br />

            <Swiper 
            className="leadership_wrap"
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation={true}
            pagination={{clickable:true}}>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={gdsc} date="Community and Code | Sept 2022-Current" info="As part of the Community and Code team, I collaborate with other students to organize a Google Incubator for McMaster by January 2023. I attend various campus events to network with sponsors, and managed to obtain 4 sponsors for the event." title="GDSC" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={ses} date="Level II Representative | Sept 2022-Current" info="As the Level II Representative for the SES, I particpate in weekly meetings to discuss and plan events to host for Software students at McMaster. I communicate with others in my program to gain insight into different merch and event ideas for our program." title="Software Engineering Society" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={archway} date="Mentor | Jul 2022-Current" info="Mentored a group of 40 first-year undergraduate students to help them transition into a university environment. Planned and executed various events throughout the year by attending various meeting with other mentors to provide input." title="Archway" />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide class_name="leader_slides" url={macchanger} date="Participant | Sept 2021-Mar 2022" info="Collaborated with students and mentors from other programs to develop a plan for more accessible transportation in the city of Hamilton. Researched the pros and cons of using E-Scrooters in Hamilton. Illustrated our plan to our peers through a 3-minute presentation." title="MacChangers" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}


export default Experience;
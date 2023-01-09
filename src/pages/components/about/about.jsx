import React from "react";
import './about.css';
import main_pic from '../../images/my_picture.jpg';


function About(){
    return(
        <section id="about">
            <h2 id="ttl">&lt;About Me /&gt;</h2>

            <div className="visual">
                <img id="my_pic" src={main_pic}></img>
                <h3 id="charac">Software Developer<br />Leader<br />Creator<br />Designer<br />Innovator</h3>
            </div>

            <div className="description">
                <p id="prompt">C:\Programmers\NirmalC&gt;</p>
                <p id="des_ttl">Description:</p>
                <p id="des_text">
                    Hello! I am a second-year Software Engineering student at McMaster University. 
                    I enjoy taking part in collaborative projects, especially those that I believe will help me make a positive impact on our society. 
                    I seek out opportunities that will allow me to develop these skills so that I may more effectively do this.
                </p>
                <p id="com_proj">
                    Completed Projects: 7+
                </p>
                <p id="exp_time">
                    Relevant Work Experience: 1+ years
                </p>
                <p id="gpa">
                    GPA: 3.98
                </p>
                <p id="courses">
                    Relevant courses:
                </p>
                <ul id="courses_list">
                    <li>Engineering Cornerstone Design Project, Grade:A+</li>
                    <li>Object-Oriented Programming, Grade:A+</li>
                    <li>Software Engineering Practice and Experience, Grade: A+</li>
                    <li>Digital Systems and Interfacing, Grade: A+</li>
                    <li>Data Structures and Algorithms, In Progress</li>
                    <li>Software Design-Intro to Software Development, In Progress</li>
                    <li>Computer Architecture, In Progress<p id='blinker'>|</p></li>
                </ul>
            
            </div>

        </section>
    );
}


export default About;
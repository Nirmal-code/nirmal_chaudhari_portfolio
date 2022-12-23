import './nav.css';
import linkedin from '../../images/linkedin.png'
import React from 'react';



function navbar(){
    return(
        <div className="nav">
            <div className="network">
                <ul id="netul">
                    <li><h2 id="logo">NC</h2></li>
                    <li><a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"><img id="linkedin" alt="LinkedIn_img" src={linkedin} href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"></img></a></li>
                </ul>
            </div>
            <div className="navbar">
                <h1 id="buffer">Nav Buffer</h1>
            </div>
        </div>
    );
}


export default navbar;
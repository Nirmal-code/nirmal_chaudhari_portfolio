import React from 'react';
import './footer.css';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';



function Footer(){
    return(
        <div className="footer">
            <h2 id="credit">Developed by Nirmal Chaudhari Jan 2022</h2>
            <ul id="footer_network">
                <li><a target="_blank"  rel="noreferrer" href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"><img id="linkedin" alt="LinkedIn_img" src={linkedin} href="https://www.linkedin.com/in/nirmal-chaudhari-0990581aa/"></img></a></li>
                <li><a target="_blank"  rel="noreferrer" href="https://github.com/Nirmal-code"><img id="github" alt="Github_img" src={github} href="https://github.com/Nirmal-code"></img></a></li>
                <li><a href="mailto: nirmal.chaudhari2003@gmail.com" id="email">✉</a></li>
            </ul>

        </div>

    );

}

export default Footer;
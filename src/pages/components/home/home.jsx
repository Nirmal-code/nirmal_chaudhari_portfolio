import './home.css';
import home_image from '../../images/home_image.png';
import resume from '../../documents/NirmalChaudhari_CurrentResume.pdf';
import React from 'react';


function Home(){
    return(
        <div className="home">
            <div className="title">
                <h1 id="greeting">Hi, I'm</h1>
                <h1 id='name'>Nirmal Chaudhari</h1>
                <h1>&lt;Software Engineer&gt;</h1>
                <hr></hr>
                <h3 id="des">Skilled at developing, testing, and implementing efficient codes to perform various tasks.</h3>
            </div>

            <a href={resume} id="resume" download>Download Resume</a>

            <img src={home_image} id="main_image" alt="my_bitmoji"></img>

            
        </div>

    );
}

export default Home;
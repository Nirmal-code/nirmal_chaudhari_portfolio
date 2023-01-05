import React from "react";
import './skills.css';

function Items(props){
    return(
        <div className="items">
            <h3 id="item_ttl">{props.name}</h3>
        </div>
    )
}

function Skills(){
    return(
        <section id="skills">
            <h2 id="ttl">&lt;Skills /&gt;</h2>
            <div className="wrapper">
                <h1 id="sec_ttl">&gt; Top Programming Languages</h1>

                <Items name="Python" />
                <Items name="Java" />
                <Items name="C" />
                <Items name="Bash" />
                <Items name="JavaScript" />
                <Items name="MATLAB" />
                <Items name="Lua" />
                <Items name="SQL" />
            </div>
            <div className="wrapper">
                <h1 id="sec_ttl">&gt; Top Tools</h1>

                <Items name="Git" />
                <Items name="React.js" />
                <Items name="Node.js" />
                <Items name="Gatsby Cloud" />
                <Items name="Simulink" />
                <Items name="Raspberry Pi" />
            </div>
        </section>
        
    );
}


export default Skills;
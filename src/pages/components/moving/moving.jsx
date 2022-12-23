import './moving.css'
import React from 'react';


const Numbers = (props) => {

    return(
        <div id={props.name}>
            <h1>1</h1>
            <h1>0</h1>
            <h1>0</h1>
            <h1>1</h1>
            <h1>1</h1>
            <br></br>
            <h1>0</h1>
            <h1>0</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <br></br>
        </div>
    )
}

function moving(){
    return(
        <div className="square">
            <Numbers name="b1"/>
            <Numbers name="b2"/>
            <Numbers name="b3"/>
            <Numbers name="b4"/>
            <Numbers name="b5"/>
            <Numbers name="b6"/>
            <Numbers name="b7"/>
            <Numbers name="b8"/>
            <Numbers name="b9"/>
            <Numbers name="b10"/>
            <Numbers name="b11"/>

        </div>
    );
}

export default moving;
import React from "react";
import './pets.css';
//import Radium from 'radium'


// eslint-disable-next-line import/no-anonymous-default-export
const Pet = props =>{
    const inputClasses = ['input']

    if(props.name !== ''){
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if(props.name.length > 4){
        inputClasses.push('bold')
    }

       
    return (
    <div className="pet">
        <h3>Pet: {props.pet}</h3>
        <p>Pet name: <strong>{props.name}</strong></p>
        <p>Pet color: <strong>{props.color}</strong></p>
        <input type="text" value={props.name} 
           onChange={props.onChangeName}
           className={inputClasses.join(' ')} />
        <button onClick={props.onDelete}>Delete</button>
    </div>)

}

export default Pet
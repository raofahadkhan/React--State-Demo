import React, { useState } from 'react';
import './Room.css'

function Room() {
    // const state = useState(true);
    // const islit = state[0];
    // const setlit = state[1];
    // console.log("state ==>",state);
    let [islit, setlit] = useState(true);

    let [age, setAge] = useState(23);

    let [temp, setTemp] = useState(72);
    
    
    function updateLit(){
        console.log('button clicked');
        // islit = !islit;
        setlit(!islit);
    }

    function lightOn(){
        console.log('light is on')
        setlit(true); 
    }
    

    function lightOff(){
        console.log('light is off')
        setlit(false); 
    }

    return (
    // <div className={"room " + (islit ? "lit":"dark")}>
    <div className={`room ${islit? "lit":"dark"}`}>
      This room is {islit ? 'lit' : 'dark'}
      <br />
    <button onClick={updateLit}>{islit? "lit":"dark"}</button>
      <br />
      Age is {age}
      <br />
      <button onClick={() => setAge(++age)}>Increase age</button>
      <br />
      <button onClick={lightOn}>light on</button>
      <button onClick={lightOff}>light off</button>
      <br />
      <button onClick={() => setTemp(++temp)}><h4>+</h4></button>
      temperature is {temp}
      <button onClick={() => setTemp(--temp)}><h4>-</h4></button>
      <br />
    </div>
  );
}

export default Room;

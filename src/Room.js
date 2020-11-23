import React, { useState } from 'react';

function Room() {
    // const state = useState(true);
    // const islit = state[0];
    // const setlit = state[1];
    // console.log("state ==>",state);
    let [islit, setlit] = useState(true);

    let [age, setAge] = useState(23);
    
    function updateLit(){
        console.log('button clicked');
        // islit = !islit;
        setlit(!islit);
    }
    
    return (
    <div>
      This room is {islit ? 'lit' : 'dark'}
      <br />
      <button onClick={updateLit}>Toggle light</button>
      <br />
      Age is {age}
      <br />
      <button onClick={() => setAge(++age)}>Increase age</button>
    </div>
  );
}

export default Room;

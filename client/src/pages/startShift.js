import React from 'react';

function startShift() {
// Start shift same style box as homeLogin page except with 5 face survey and "Start Shift" button. 
// upon clicking "start shift" will need to return to homelogin page and make sure values are cleared in forms
  return (

    <div className="startBody">
      <div className="card w-50">
        <div className="card-body text-center">
            <h5 className="card-title">Hows your mood today?</h5>
            <h1>
                <button className="one">😫</button>
                <button className="two">😔</button>
                <button className="three">😐</button>
                <button className="four">😊</button>
                <button className="five">😁</button>
            </h1>
            <button type="button" className="btn btn-primary btn-lg btn-block">Start Shift!</button>
        </div>
    </div>
    </div>
    
  );
}

export default startShift;
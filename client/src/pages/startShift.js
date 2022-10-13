import React from 'react';

function startShift() {
// Start shift same style box as homeLogin page except with 5 face survey and "Start Shift" button. 
// upon clicking "start shift" will need to return to homelogin page and make sure values are cleared in forms
  return (

    <div className="startBody">
      <div class="card w-50">
        <div class="card-body text-center">
            <h5 class="card-title">Hows your mood today?</h5>
            <h1>
                <button class="one">😫</button>
                <button class="two">😔</button>
                <button class="three">😐</button>
                <button class="four">😊</button>
                <button class="five">😁</button>
            </h1>
            <button type="button" class="btn btn-primary btn-lg btn-block">Start Shift!</button>
        </div>
    </div>
    </div>
    
  );
}

export default startShift;
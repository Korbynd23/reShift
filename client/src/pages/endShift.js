import React from 'react';

function endShift() {
  // End shift same style box as homeLogin page except with 5 face survey and "End Shift" button. 
  // upon clicking "end shift" will need to return to homelogin page and make sure values are cleared in forms
  return (
    
    <div className="endBody">
      <div class="card">
        <div class="card-body text-center">
          <h5 class="card-title">Hows your mood today?</h5>
          <h1>
            <button class="link">😫</button>
            <button class="link">😔</button>
            <button class="link">😐</button>
            <button class="link">😊</button>
            <button class="link">😁</button>
          </h1>
          <button type="button" class="btn btn-primary btn-lg btn-block">End Shift</button>
        </div>
      </div>
    </div>

  );
}

export default endShift;
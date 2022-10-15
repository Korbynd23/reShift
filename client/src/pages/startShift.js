import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {ADD_REACTIONSTART} from '../utils/mutations';



function StartShift() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addReactionStart, {error}] = useMutation(ADD_REACTIONSTART);

  const submitReaction = (e) => {
    const {startTimeValue, value} = e.target;
    prompt("Deez")

    setFormState({
      ...formState,
      [startTimeValue]: value
    })

  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const {data} = await addReactionStart({
        variables: {
          ...formState
        }
      })
    }catch (e) {
        console.error(e)
      }
    }



// Start shift same style box as homeLogin page except with 5 face survey and "Start Shift" button. 
// upon clicking "start shift" will need to return to homelogin page and make sure values are cleared in forms
  return (

/* <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center">
      <div className="card-body">
        <form className='formText' onSubmit={submitReaction}>
          <input
            className="form-input"
            placeholder="Enter value for reaction here!"
            name="value"
            type="value"
            value={formState.value}
            onClick={handleClick}
          />
          <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Confirm
                </button>
        </form>
      </div>
    </div> */


    <div className="startBody">
      <div className="card w-50">
        <div className="card-body text-center">
            <h5 className="card-title">Hows your mood today?</h5>
            <h1>
                <button value="1" onClick={alert(this.value)}>😫</button>
                <button value="2">😔</button>
                <button value="3">😐</button>
                <button value="4">😊</button>
                <button value="5">😁</button>
            </h1>
            <button type="button" className="btn btn-primary btn-lg btn-block">Start Shift!</button>
        </div>
    </div>
    </div>
    
  );
}

export default StartShift;
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REMOVE_EMPLOYEE } from '../utils/mutations';
import '../styles/app.css';


const DeleteEmployee = () => {

  const [formState, setFormState] = useState({
    name: '',
  });

  const [cutEmployee, { error }] = useMutation(REMOVE_EMPLOYEE);


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(cutEmployee);


    // // Missing something here that takes our employee and adds them to the database.
    try {
      const { data } = cutEmployee({ variables: { ...formState },});


      // I dont think this is supposed to be window.location.reload but idk what else to try 
      console.log(data);
      // says data is undefined 
    } catch (err) {
      console.error(err);
    }

    // const mutationResponse = await addEmployee({
    //   variables: {
    //     name: formState.name,
    //     password: formState.password,
    //   },
    // });

    // const wtf = mutationResponse.data.addEmployee;
    // db.addEmployee(wtf)


    // clear form values
    setFormState({
      name: '',
    });
  };

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center">
      <div className="card-body">
        <form className='formText' onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="Employee ID"
            name="name"
            type="name"
            value={formState.name}
            onChange={handleChange}
          />
  
          <button
            className="btn btn-block btn-primary"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Cut
          </button>
        </form>
        
        {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default DeleteEmployee;
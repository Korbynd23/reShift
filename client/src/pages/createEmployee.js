import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EMPLOYEE } from '../utils/mutations';
import '../styles/app.css';


const CreateEmployee = () => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addEmployee, { error }] = useMutation(ADD_EMPLOYEE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addEmployee ({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
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
          <input
            className="form-input"
            placeholder='Code'
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          />
          <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  +
                </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEmployee;
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import '../styles/app.css';



const Home = () => {
  
  const [formState, setFormState] = useState({ name: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  

  // eslint-disable-next-line
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login ({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      navigate('/startShift');
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      name: '',
      password: '',
    });
  };


  // Will need login box(entail: employeeId and PIN) and 2 buttons: clock in and clock out. Clock out will only work if user is clocked in - if not clock out will display prompt.
  // Bottom with have an admin button that will prompt sign in and will redirect to admin page with employee queries that will display all employees and an "addEmployee" and "removeEmployee" functions
  return (

    <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center">
      <div className="card-body">
        <p className="card-text text-center">Please Enter Your Employee Id and Password To Clock In</p>
        <div>
          <div className="card-header bg-dark text-center">
            <h2>Welcome to Work!</h2>
          </div>
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
              className="btn btn-primary btn-lg"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Clock In
            </button>
            <br></br>
            <button
              className="btn btn-secondary btn-lg"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Clock Out
            </button>
          </form>

          {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default Home;


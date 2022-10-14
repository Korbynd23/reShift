import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import '../styles/app.css';



const AdminLogin = () => {

    const navigate = useNavigate();
    const adminPass = 123456

    const [password, setPassword] = useState({password: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password === adminPass) {
            navigate('/adminPage')
        }
    }
    alert(`The name you entered was wrong`);


    return (
        <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center">
            <div className="card-body">
                <p className="card-text text-center">Please Enter Your Employee Id and Password To Clock In</p>
                <div>
                    <div className="card-header bg-dark text-center">
                        <h2>Welcome to Work!</h2>
                    </div>
                    <form className='formText' onSubmit={handleSubmit}>
                        <input
                            className="form-input"
                            placeholder='Code'
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <input type="submit" />
                        <br></br>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default AdminLogin;
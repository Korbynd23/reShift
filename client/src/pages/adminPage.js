import React from 'react';
// import { Link } from 'react-router-dom';
import EmployeeList from '../components/Employees';
import '../styles/app.css';
import { useQuery } from '@apollo/client';
import { QUERY_EMPLOYEES } from '../utils/queries';

const AdminPage = () => {
  // Admin page will display all employees with options to addEmployees and removeEmployees. 
  const { loading, data} = useQuery(QUERY_EMPLOYEES);
  const employees = data?.employees || [];

  return (
<<<<<<< HEAD
    <main>
    <div className="flex-row justify-center">
      <div className="col-12 col-md-8 mb-3">
        {/* If the data is still loading, render a loading message */}
        {loading ? (
          <div>Loading...</div>
        ) : (
          <EmployeeList
            employees={employees}
            title="Some Feed for Thought(s)..."
          />
        )}
      </div>
=======
    <div>
      <p className="adminTop"> 
      </p>

      <div className='adminBody'>
        <div>
          <h2>Employee Roster:</h2>
          {/* <div>employees.length basically </div> */}
          {/* will need to add it so that to the list of Employee's There is an update and delete area on their line  */}
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Employee ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Brad</td>
              <td>Meyer</td>
              <td>brad</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Tyler</td>
              <td>Neal</td>
              <td>Tyler's Forehead</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Kyler</td>
              <td>th'Lad</td>
              <td>kyle</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='eBtn'>
        {/* Exit button to go back to Home Login */}
        <Link to="/">
          <button type="button" className="btn btn-danger">Exit</button>
        </Link>
      </div>
>>>>>>> 3c7ae0b1ea6fc9a1bb149702e8b38d51f5dd6e77
    </div>
  </main>
  );
};

export default AdminPage;

// <div>
//   <p className="adminTop"> .
//   </p>


//   {/* Exit button to go back to Home Login */}
//   <Link to="/">
//     <button type="button" className="btn btn-danger">Exit</button>
//   </Link>
// </div>


    // Needs to be used on adminPage to retrieve all employees (8-11)
    // const { loading, data } = useQuery(QUERY_EMPLOYEE, {
    //   fetchPolicy: "no-cache"
    // });
    // const employeeList = data?.matchups || [];
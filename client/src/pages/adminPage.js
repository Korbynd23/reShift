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
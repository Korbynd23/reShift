import React from 'react';


const EmployeeList = ({employees}) => {
  // Admin page will display all employees with options to addEmployees and removeEmployees. 

  return (
    <div>
      <p className="adminTop"> .
      </p>

      <div className='adminBody'>
        <div>
          <h2>Employee Roster:</h2>
          {/* <div>employees.length basically </div> */}
          {/* will need to add it so that to the list of Employee's There is an update and delete area on their line  */}
        </div>

        {employees &&
        employees.map((employee) => (
          <div key={employee.name} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {employee.name} <br />
            </h4>
            <div className="card-body bg-light p-2">
              <p>{employee.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList
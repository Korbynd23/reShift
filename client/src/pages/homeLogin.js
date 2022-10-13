// import { Link } from 'react-router-dom';

import '../styles/app.css';

const Home = () => {

  // Needs to be used on adminPage to retrieve all employees (8-11)
  // const { loading, data } = useQuery(QUERY_EMPLOYEE, {
  //   fetchPolicy: "no-cache"
  // });
  // const employeeList = data?.matchups || [];


  // Will need login box(entail: employeeId and PIN) and 2 buttons: clock in and clock out. Clock out will only work if user is clocked in - if not clock out will display prompt.
  // Bottom with have an admin button that will prompt sign in and will redirect to admin page with employee queries that will display all employees and an "addEmployee" and "removeEmployee" functions
  return (
    <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Welcome To Work!</h5>
        <p className="card-text">Please Enter Employee Id and Password To Clock In!</p>
      </div>
    </div>
    
    
  );
};

export default Home;

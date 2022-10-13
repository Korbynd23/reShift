import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import '../styles/app.css';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache"
  });

  const matchupList = data?.matchups || [];
// Will need login box(entail: employeeId and PIN) and 2 buttons: clock in and clock out. Clock out will only work if user is clocked in - if not clock out will display prompt.
// Bottom with have an admin button that will prompt sign in and will redirect to admin page with employee queries that will display all employees and an "addEmployee" and "removeEmployee" functions
  return (
    <div className="card text-white bg-dark text-light d-flex justify-content-center vh-100 align-items-center" style="width: 18rem;">
      <div className="card-body">
        <h5 className="card-title">Welcome To Work!</h5>
        <p className="card-text">Please Enter Employee Id and Password To Clock In!</p>
      </div>
      <form>
      <div className="form-group">
        <label for="employeeId">Employee Id</label>
        <input type="employeeId" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"></input>
      </div>
      <button type="button" className="btn btn-primary btn-lg">Clock In</button>
      <button type="button" className="btn btn-secondary btn-lg">Clock Out</button>
    </form>

      {/* HERE IS WHERE THE EMPLOYEE INPUT CARD WILL BE */}
    
    </div>
    
    
  );
};

export default Home;

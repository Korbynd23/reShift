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
    <div>
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Work!</h1>
      </div>

      {/* HERE IS WHERE THE EMPLOYEE INPUT CARD WILL BE */}
    
    
    </div>
  );
};

export default Home;

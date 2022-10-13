import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/app.css';

// import { useQuery } from '@apollo/client';
// import { QUERY_EMPLOYEE } from '../utils/queries';

function adminPage() {
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


        {/* Button */}
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Add Employee (+)</button>

        {/* Modal */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Adding Employee</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Employee ID:</label>
                    <input type="text" class="form-control" id="recipient-name" />
                  </div>
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">Employee PIN:</label>
                    <textarea class="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Exit button to go back to Home Login */}
      <Link to="/">
        <button type="button" className="btn btn-danger">Exit</button>
      </Link>
    </div>
  );
}

export default adminPage;

    // Needs to be used on adminPage to retrieve all employees (8-11)
    // const { loading, data } = useQuery(QUERY_EMPLOYEE, {
    //   fetchPolicy: "no-cache"
    // });
    // const employeeList = data?.matchups || [];
import React from 'react';
import '../styles/app.css';

function adminPage() {
  // Admin page will display all employees with options to addEmployees and removeEmployees. 

  return (
    <div>
      <div className="adminTop">
        <h1>Admin Page</h1>
      </div>

      <div className='adminBody'>
        <div>
          <h1>Here is the list of employees</h1>
          {/* <div>employees.length basically </div> */}
          {/* will need to add it so that to the list of Employee's There is an update and delete area on their line  */}
        </div>


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
                    <input type="text" class="form-control" id="recipient-name"/>
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
      <Link to="/homeLogin">
        <button type="button" className="btn btn-danger">Exit</button>
      </Link>
    </div>
  );
}

export default adminPage;
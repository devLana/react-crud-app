import React, { useState } from 'react';
import { data } from "./data/users";
import ViewUsers from "./Components/ViewUsers";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

const App = () => {
  const user = {id: null, name: "", occupation: ""};
  const [users, setUsers] = useState(data.users);
  const [isEdit, setIsEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(user);

  return (
    <div className="container">
      <h1>Personnel Manager</h1>
      <div className="row">
        <div className="form-container col-md-5">
          {
            isEdit
              ? <EditUser />
              : <AddUser />
          }
        </div>
        <div className="table-responsive-md col-md-7">
          <ViewUsers users={users} edit={isEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;

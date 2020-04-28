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
  const [selectUser, setSelectUser] = useState(user);

  const add = user => {
    const len = users.length;
    const newId = len === 0 ? 1 : users[len - 1].id + 1;
    user.id = newId;

    setUsers([...users, user]);
  }

  const del = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const edit = userToEdit => {
    setIsEdit(true);
    setSelectUser(userToEdit);
  }

  const editUser = user => {

  }

  console.log("1 is", selectUser);

  return (
    <div className="container">
      <h1>Personnel Manager</h1>
      <div className="row">
        <div className="form-container col-md-5">
          {
            isEdit
              ? <EditUser userToEdit={selectUser} editUser={editUser} />
              : <AddUser addUser={add} />
          }
        </div>
        <div className="table-responsive-md col-md-7">
          <ViewUsers
            users={users}
            edit={isEdit}
            deleteUser={del}
            editedUser={edit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

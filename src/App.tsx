import React, { useState } from "react";
import { data } from "./data/users";
import ViewUsers from "./Components/ViewUsers";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/EditUser";
import type { User, UserToAdd } from "./dataTypes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const user: User = { id: 0, name: "", occupation: "" };

  const [users, setUsers] = useState<Array<User>>(data.users);
  const [isEdit, setIsEdit] = useState(false);
  const [selectUser, setSelectUser] = useState(user);

  const add = (user: UserToAdd) => {
    const len = users.length;
    const newId = len === 0 ? 1 : users[len - 1].id + 1;
    const newUser = { ...user, id: newId };

    setUsers([...users, newUser]);
  };

  const del = (id: number) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const edit = (userToEdit: User) => {
    setIsEdit(true);
    setSelectUser(userToEdit);
  };

  const editUser = (editedUser: User) => {
    const usersArr = users.map(user => {
      return user.id === editedUser.id ? editedUser : user;
    });

    setUsers(usersArr);
    setIsEdit(false);
    setSelectUser(user);
  };

  const closeEdit = () => {
    setIsEdit(false);
    setSelectUser(user);
  };

  return (
    <div className="container">
      <h1>Personnel Manager</h1>
      <div className="row">
        <div className="form-container col-md-5">
          {isEdit ? (
            <EditUser
              userToEdit={selectUser}
              editUser={editUser}
              closeEdit={closeEdit}
            />
          ) : (
            <AddUser addUser={add} />
          )}
        </div>
        <div className="table-responsive-md col-md-7">
          <ViewUsers
            users={users}
            editMode={isEdit}
            deleteUser={del}
            editUser={edit}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

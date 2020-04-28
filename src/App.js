import React, { useState } from 'react';
import { data } from "./data/users";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

function App() {
  const user = {id: null, name: "", occupation: ""};
  const { users, setUsers } = useState(data.users);
  const { isEdit, setIsEdit } = useState(false);
  const { userToEdit, setUserToEdit } = useState(user);

  return (
    <p>Hello World</p>
  );
}

export default App;

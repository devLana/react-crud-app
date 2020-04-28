import React, { useState } from "react";

const AddUser = ({addUser}) => {
  const currentUser = {name: "", occupation: ""};
  const [user, setUser] = useState(currentUser);

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  }

  const handleBlur = e => {
    const { name, value } = e.target;
    setUser({...user, [name]: value.trim()});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!user.name || !user.occupation) return;

    addUser(user);
    setUser(currentUser);
  }

  return (
    <div className="add-user">
      <h3>Add User</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="add__name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            id="add__name"
            className="form-control form-control-lg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="add__occupation">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={user.occupation}
            id="add__occupation"
            className="form-control form-control-lg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <input
          type="submit"
          className="btn btn-success"
          value="Add"
        />
      </form>
    </div>
  )
}

export default AddUser;

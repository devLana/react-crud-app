import React, { useState, useEffect } from "react";

const EditUser = props => {
  const { userToEdit, editedUser, closeEditMode } = props;
  const [user, setUser] = useState(userToEdit);
  useEffect(() => setUser(userToEdit), [userToEdit]);

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

    editedUser(user);
  }

  return (
    <div className="edit-user">
      <h3>Edit User</h3>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="edit__name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            id="edit__name"
            className="form-control form-control-lg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="form-group">
          <label htmlFor="edit__occupation">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={user.occupation}
            id="edit__occupation"
            className="form-control form-control-lg"
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <div className="ctrl__btns">
          <span className="btn btn-secondary" onClick={() => closeEditMode()}>Cancel</span>
          <input
            type="submit"
            className="btn btn-primary"
            value="Edit"
          />
        </div>
      </form>
    </div>
  )
}

export default EditUser;
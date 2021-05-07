import React from "react";

const ViewUsers = ({ users, deleteUser, editMode, editUser }) => {
  const rows = users.map(user => {
    const handleEdit = () => editUser(user);
    const handleDelete = () => deleteUser(user.id);

    return (
      <tr key={user.id}>
        <td className="user__name">{user.name}</td>
        <td className="user__occupation">{user.occupation}</td>
        <td>
          <button className="edit btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
          {editMode ? (
            <button className="delete btn btn-danger disabled">Delete</button>
          ) : (
            <button className="delete btn btn-danger" onClick={handleDelete}>
              Delete
            </button>
          )}
        </td>
      </tr>
    );
  });

  return (
    <>
      <h3>Users</h3>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Occupation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <th colSpan={3}>No Data Available</th>
            </tr>
          ) : (
            rows
          )}
        </tbody>
      </table>
    </>
  );
};

export default ViewUsers;

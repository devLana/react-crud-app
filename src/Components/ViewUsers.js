import React from "react";

const ViewUsers = props => {
  const rows = props.users.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.occupation}</td>
        <td>
          <button className="edit btn btn-info">Edit</button>
          {
            props.edit
              ? <button className="delete btn btn-danger disabled">Delete</button>
              : <button className="delete btn btn-danger">Delete</button>
          }
        </td>
      </tr>
    )
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
          {
            props.users.length === 0
              ? <tr><td colSpan={3}>No Data Available</td></tr>
              : rows
          }
        </tbody>
      </table>
    </>
  )

}

export default ViewUsers;

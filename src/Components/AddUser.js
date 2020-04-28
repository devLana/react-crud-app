import React, { useState } from "react";

const AddUser = props => {

  return (
    <div className="add-user">
      <h3>Add User</h3>
      <form>
        <div className="form-group">
          <label htmlFor="add__name">Name</label>
          <input
            type="text"
            id="add__name"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <label htmlFor="add__occupation">Occupation</label>
          <input
            type="text"
            id="add__occupation"
            className="form-control form-control-lg"
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

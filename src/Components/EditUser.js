import React from "react";

const EditUser = props => {

  return (
    <div className="edit-user">
      <h3>Edit User</h3>
      <form>
        <div className="form-group">
          <label htmlFor="edit__name">Name</label>
          <input
            type="text"
            id="edit__name"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <label htmlFor="edit__occupation">Occupation</label>
          <input
            type="text"
            id="edit__occupation"
            className="form-control form-control-lg"
          />
        </div>
        <div className="ctrl__btns">
          <span className="btn btn-secondary">Cancel</span>
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
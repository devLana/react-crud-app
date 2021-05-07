import React, { useState, useEffect } from "react";
import Form from "./Form";

const EditUser = ({ userToEdit, editUser, closeEdit }) => {
  const [user, setUser] = useState(userToEdit);

  useEffect(() => {
    setUser(userToEdit);
  }, [userToEdit]);

  const handleChange = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleBlur = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value.trim() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!user.name || !user.occupation) return;

    editUser(user);
  };

  return (
    <div className="edit-user">
      <h3>Edit User</h3>
      <Form
        formType="edit"
        nameId="edit__name"
        occupationId="edit__occupation"
        name={user.name}
        occupation={user.occupation}
        closeEdit={closeEdit}
        submitFn={handleSubmit}
        changeFn={handleChange}
        blurFn={handleBlur}
      />
    </div>
  );
};

export default EditUser;

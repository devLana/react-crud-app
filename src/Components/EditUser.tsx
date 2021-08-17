import React, { useState, useEffect } from "react";
import Form from "./Form";
import { User } from "../dataTypes";

interface EditUserProps {
  userToEdit: User;
  editUser: (obj: User) => void;
  closeEdit: () => void;
}

const EditUser = ({ userToEdit, editUser, closeEdit }: EditUserProps) => {
  const [user, setUser] = useState(userToEdit);

  useEffect(() => {
    setUser(userToEdit);
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value.trim() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

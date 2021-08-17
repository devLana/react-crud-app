import React, { useState } from "react";
import Form from "./Form";
import type { UserToAdd } from "../dataTypes";

interface AddUserProps {
  addUser(obj: UserToAdd): void;
}

const AddUser = ({ addUser }: AddUserProps) => {
  const currentUser: UserToAdd = { name: "", occupation: "" };
  const [user, setUser] = useState(currentUser);

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

    addUser(user);
    setUser(currentUser);
  };

  return (
    <div className="add-user">
      <h3>Add User</h3>
      <Form
        nameId="add__name"
        occupationId="add__occupation"
        name={user.name}
        occupation={user.occupation}
        submitFn={handleSubmit}
        changeFn={handleChange}
        blurFn={handleBlur}
      />
    </div>
  );
};

export default AddUser;

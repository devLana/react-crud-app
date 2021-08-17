import type { User } from "../dataTypes";

type UserData = {
  users: Array<User>;
};

export const data: UserData = {
  users: [
    {
      id: 1,
      name: "Frank",
      occupation: "Teacher",
    },
    {
      id: 2,
      name: "Susan",
      occupation: "Dance Instructor",
    },
    {
      id: 3,
      name: "Mary",
      occupation: "Bar Tender",
    },
    {
      id: 4,
      name: "Dan",
      occupation: "Physician",
    },
    {
      id: 5,
      name: "Ivan",
      occupation: "Chef",
    },
  ],
};

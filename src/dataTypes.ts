export type User = {
  id: number;
  name: string;
  occupation: string;
};

export type UserToAdd = Omit<User, "id">;

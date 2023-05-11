import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>This is user components</h2>
      {users.map((user) => (
        <p>
          Name: {user.name}, Email: {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;

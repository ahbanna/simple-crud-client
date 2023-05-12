import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfully");
        }
      });
  };

  return (
    <div>
      <h2>This is user components</h2>
      {users.map((user) => (
        <p key={user._id}>
          Name: {user.name}, Email: {user.email}{" "}
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default Users;

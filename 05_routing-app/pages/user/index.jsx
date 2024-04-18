import React, { useState, useEffect } from "react";

const index = () => {
  const [users, setUser] = useState([]);
  console.log("User", users);
  useEffect(() => {
    async function fatchUser() {
      const data = await fetch("https://dummyjson.com/users");
      setUser(await data.json());
    }
    fatchUser();
  }, []);

  return (
    <div>
    <h1>USER ROOT</h1>
    {users?.users?.map(user => <li key={user.id}>{user.firstName}</li>)}
  </div>
  
  );
};

export default index;

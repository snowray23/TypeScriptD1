import React from 'react'

type User = {
    name: string;
    age: number;
  };

const UserList = () => {
    const users: User[] = [
        { name: "Alice", age: 25 },
        { name: "Sarah", age: 27 },
        { name: "Ray", age: 30 }
      ];
  return (
    <div>
        <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.name} - {user.age} years old
        </li>
      ))}
    </ul>
      
    </div>
  )
}

export default UserList

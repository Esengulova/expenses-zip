import React, { useEffect, useState } from 'react'




const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
     
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Список пользователей:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
		
      </ul>
    </div>
  );
};

export default Users;




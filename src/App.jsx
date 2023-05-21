import { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';

export default function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (namaUser, umurUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { nama: namaUser, umur: umurUser, id: Math.random().toString() }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

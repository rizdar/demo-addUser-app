import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

export default function AddUser({ onAddUser }) {
  const [enteredName, setenteredName] = useState('');
  const [enteredAge, setenteredAge] = useState('');
  const [error, setError] = useState(null);

  const nameChangeHandler = (event) => {
    setenteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setenteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Kesalahan Input',
        message: 'Nama atau umur wajib di isi!!!',
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Kesalahan input umur',
        message: 'Umur tidak boleh <= 0',
      });
      return;
    }

    onAddUser(enteredName, enteredAge);
    setenteredAge('');
    setenteredName('');
  };
  const confirmErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal errors={error} onConfirm={confirmErrorHandler} />}
      <Card>
        <form className="p-4" onSubmit={submitHandler}>
          <p className="flex gap-4 mb-4 items-center">
            <label htmlFor="nama" className="font-bold">
              Nama :
            </label>
            <input type="text" id="nama" className="w-3/4 p-2 rounded-md border-2 border-blue-200 focus:bg-blue-300 focus:outline-blue-300" onChange={nameChangeHandler} value={enteredName} />
          </p>
          <p className="flex gap-4 mb-4 items-center">
            <label htmlFor="umur" className="font-bold">
              Umur :
            </label>
            <input type="number" id="umur" className="w-3/4 p-2 rounded-md border-2 border-blue-200 focus:bg-blue-300 focus:outline-blue-300" onChange={ageChangeHandler} value={enteredAge} />
          </p>
          <div className="mt-4">
            <Button type="submit">Add User</Button>
          </div>
        </form>
      </Card>
    </>
  );
}

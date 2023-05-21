import Card from '../UI/Card';

export default function UsersList({ users }) {
  return (
    <>
      {users.length !== 0 && (
        <Card className="p-4">
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-2  last:mb-0 text-lg font-medium">
                {user.nama}, ({user.umur} tahun)
              </li>
            ))}
          </ul>
        </Card>
      )}
    </>
  );
}

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store/users/usersSlice';

const UserList = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, fetchUsers]);

  const { users, isLoading, error } = useSelector(state => state.users);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default UserList;

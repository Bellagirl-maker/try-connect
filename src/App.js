import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/users/usersSlice';

import './App.css';

function App() {
  const { users, isLoading, error } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Loading error</p>;
  }

  return (
    <div className="App">
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              {user.name.first} {user.name.last}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

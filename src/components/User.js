import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/user/usersSlice';

const User = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) { return <div>Loading...</div>; }
  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.login.uuid}>
          {user.name.first}
          {' '}
          {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default User;

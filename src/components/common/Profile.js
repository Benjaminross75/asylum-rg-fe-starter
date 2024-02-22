import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="user-profile">
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          <h3>Family Name: {user?.family_name} </h3>
          <h3> Nickname: {user?.nickname} </h3>
          <h3> Email: {user?.email} </h3>
          <h3> Updated: {user?.updated_at} </h3>
        </ul>
      </div>
    )
  );
};

export default ProfilePage;
//{Object.keys(user).map((objkey,i) => <li key={i}>{objkey}: {user[objkey]} </li>)}

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProfilePage = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article>
        {JSON.stringify(user)}
        {user?.picture && <img src={user.picture} alt={user?.name} />}
      </article>
    )
  );
};

export default ProfilePage;

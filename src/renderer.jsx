//  
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  FronteggProvider,
  useAuth,
  useLoginWithRedirect,
  ContextHolder,
} from '@frontegg/react';

const contextOptions = {
    baseUrl: import.meta.env.VITE_FRONTEGG_BASE_URL,
    clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID,
    appId: import.meta.env.VITE_FRONTEGG_APP_ID
  };

function App() {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();

  useEffect(() => {
    if (!isAuthenticated) loginWithRedirect();
  }, [isAuthenticated, loginWithRedirect]);

  if (!isAuthenticated) {
    return (
      <button style={{ margin: 20, padding: '8px 16px' }} onClick={loginWithRedirect}>
        Login
      </button>
    );
  }

  const logout = () => {
    const baseUrl = ContextHolder.for().getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location.href}`;
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
      <h2>Welcome, {user?.name}!</h2>
      <img
        src={user?.profilePictureUrl}
        alt={user?.name}
        width={64}
        height={64}
        style={{ borderRadius: '50%', margin: '16px 0' }}
      />
      <button style={{ padding: '8px 16px' }} onClick={logout}>
        Logout
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
); 
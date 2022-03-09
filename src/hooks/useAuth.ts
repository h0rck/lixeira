import { useState } from 'react';

import {api} from '../api/url';

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);

  function handleSetToken():boolean { 
      const token = localStorage.getItem('token');
      if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token)}`;
        setAuthenticated(true);

      }else setAuthenticated(false);
      
      return authenticated;
  }
  
  function handleLogin(token:string) {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = '';
    setAuthenticated(false);
  }
  
  return { authenticated, handleSetToken, handleLogin, handleLogout };
}

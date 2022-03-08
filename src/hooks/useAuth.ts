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
  
  function handleLogin(token:string):boolean {
    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setAuthenticated(true);
    return authenticated;
  }

  function handleLogout():boolean {
    localStorage.removeItem('token');
    api.defaults.headers.common['Authorization'] = '';
    setAuthenticated(false);
    return authenticated;
  }
  
  return { authenticated, handleSetToken, handleLogin, handleLogout };
}
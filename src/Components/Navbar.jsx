import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
const {isToggleAuth, login, logout} = useContext(AuthContext);
  return (
      <>
    <div>
        
        <button onClick={ () => {
            console.log('Im clicked')
            if(isToggleAuth)
            {
                logout();
            }
            else
            {
                login();
               
            }
        }}>
        {isToggleAuth ? 'Logout' : 'Login'}</button>
    </div>
    </>
  )
}

export default Navbar
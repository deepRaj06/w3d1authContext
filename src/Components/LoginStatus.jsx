import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';

const LoginStatus = () => {
    const{isAuthorized}= useContext(AuthContext);
    console.log(isAuthorized);
  return (
    <div>
        LoginStatus : Login Successful and token is {isAuthorized.token}.
    </div>
  )
}

export default LoginStatus
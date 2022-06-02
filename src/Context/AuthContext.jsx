import { useState } from "react";
import { createContext } from "react";

// S1
export const AuthContext = createContext();

// S2
export const AuthProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState('');
  const [isToggleAuth, setIsAuthToggle] = useState(false);

  // 
  const login = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type" : "application/json",
      },
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      }),
    })
      .then( (res) => res.json())
      .then( (data) => {
        setIsAuthToggle(true);
        // console.log(data.token);
        setIsAuthorized(data);
      })

  };

  const logout = () => {
    setIsAuthToggle(false);
  };
  return (
    <AuthContext.Provider value={{isToggleAuth, isAuthorized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

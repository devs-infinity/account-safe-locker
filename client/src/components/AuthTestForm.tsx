import React, { useState, useEffect } from "react";
import { logIn, signUp, getCurrentUser, logOut } from "../services/auth";

const initialRegisterFormData: RegisterFormData = {
  username: "",
  email: "",
  password: "",
};

const initialLoginFormData: LoginFormData = {
  usernameOrEmail: "",
  password: "",
};

const AuthTestForm = () => {
  const [registerFormData, setRegisterFormData] = useState<RegisterFormData>(initialRegisterFormData);
  const [loginFormData, setLoginFormData] = useState<LoginFormData>(initialLoginFormData);
  const [currentUser, setCurrentUser] = useState<any>();

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegisterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(registerFormData.email, registerFormData.username, registerFormData.password).then(user => {
      setCurrentUser(user);
    });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn(loginFormData.usernameOrEmail, loginFormData.password).then(user => {
      setCurrentUser(user);
    });
  };

  useEffect(() => {
    getCurrentUser().then(user => {
      setCurrentUser(user);
    });
  }, []);
  return (
    <>
      <div>
        <h2>Current User: {currentUser ? currentUser?.username : "None"}</h2>
        <button
          onClick={async () => {
            logOut().then(() => {
              setCurrentUser(null);
            });
          }}
        >
          Logout
        </button>
      </div>
      <div>
        <form spellCheck='false' onSubmit={handleRegisterSubmit}>
          <h1>SIGN UP</h1>
          <input name='username' type='text' placeholder='Username' onChange={handleRegisterChange} />
          <input name='email' type='email' placeholder='Email' onChange={handleRegisterChange} />
          <input name='password' type='password' placeholder='Choose your password' onChange={handleRegisterChange} />
          <button type='submit'>Sign Up</button>
        </form>
      </div>

      <div>
        <form spellCheck='false' onSubmit={handleLoginSubmit}>
          <h1>LOG IN</h1>
          <input name='usernameOrEmail' type='text' placeholder='Username or Email' onChange={handleLoginChange} />
          <input name='password' type='password' placeholder='Enter your password' onChange={handleLoginChange} />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </>
  );
};

export default AuthTestForm;

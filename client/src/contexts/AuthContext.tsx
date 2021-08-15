import React, { useContext, createContext, useState, useEffect } from "react";
import auth from "../services/auth";

interface Value {
  currentUser: UserType | null | undefined;
  signUp: (email: string, username: string, password: string) => any;
  logIn: (usernameOrEmail: string, password: string) => any;
  logOut: () => any;
  loading: boolean;
}

const AuthContext = React.createContext<Value>({} as Value);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProvider {}
export const AuthProvider: React.FC<AuthProvider> = ({ children }) => {
  // States
  const [currentUser, setCurrentUser] = useState<UserType | null | undefined>();

  // loading boolean for when the currentUser is still being fetched. Will be set to false after it either found or not found.
  // Use this to conditionally render a component that relies on auth data.
  const [loading, setLoading] = useState(true);

  // Functions
  const signUp = (email: string, username: string, password: string) => {
    auth.signUp(email, username, password).then((res) => {
      setCurrentUser(res.currentUser);
    });
  };

  const logIn = (usernameOrEmail: string, password: string) => {
    auth.logIn(usernameOrEmail, password).then((res) => {
      setCurrentUser(res.currentUser);
    });
  };

  const logOut = () => {
    auth.logOut().then(() => {
      setCurrentUser(null);
    });
  };

  useEffect(() => {
    auth.getCurrentUser().then((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  const value: Value = {
    currentUser,
    signUp,
    logIn,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

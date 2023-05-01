/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../Config/config.firebase";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (loadedUser) => {
      setUser(loadedUser);
      console.log(loadedUser);
    });
  }, []);

  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    signOut(auth);
  };

  const authInfo = {
    user,
    Login,
    Register,
    Logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

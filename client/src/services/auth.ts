import axios from "axios";

const authURL = "http://localhost:4000/auth";

export const signUp = async (
  email: string,
  username: string,
  password: string
) => {
  return axios({
    method: "POST",
    data: {
      email,
      username,
      password,
    },
    withCredentials: true,
    url: `${authURL}/signup`,
  }).then((res) => {
    console.log(res);
    return logIn(username, password);
  });
};

export const logIn = async (usernameOrEmail: string, password: string) => {
  return axios({
    method: "POST",
    data: {
      username: usernameOrEmail,
      password,
    },
    withCredentials: true,
    url: `${authURL}/login`,
  }).then((res) => {
    console.log(res);
    return getCurrentUser();
  });
};

export const getCurrentUser = async () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: `${authURL}/currentuser`,
  }).then((res) => {
    return res.data;
  });
};

export const logOut = async () => {
  return axios({
    method: "GET",
    withCredentials: true,
    url: `${authURL}/logout`,
  });
};

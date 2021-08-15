import axios from 'axios';

const authURL = 'http://localhost:4000/auth';

/**
 * Creates a new user in the datbase.
 * Returns a message from the backend regarding success of signUp.
 */
export const signUp = async (
    email: string,
    username: string,
    password: string
) => {
    const res = await axios({
        method: 'POST',
        data: {
            email,
            username,
            password,
        },
        withCredentials: true,
        url: `${authURL}/signup`,
    });

    // console.log(res);

    const message = res.data; // Was the sign up successful?
    const { currentUser } = await logIn(username, password);

    return {
        message,
        currentUser,
    };
};

/**
 * Logs the user in and creates a session of the browser in the database.
 * Returns a message from the backend regarding success of logIn.
 */
export const logIn = async (usernameOrEmail: string, password: string) => {
    const res = await axios({
        method: 'POST',
        data: {
            username: usernameOrEmail,
            password,
        },
        withCredentials: true,
        url: `${authURL}/login`,
    });

    // console.log(res);

    const message: string = res.data; // Was the log in successful?
    const currentUser: UserType = await getCurrentUser();

    return {
        message,
        currentUser,
    };
};

/**
 * Fetches the current user in session associated with this browser from the backend.
 * Should return UserType if successful, otherwise an empty string.
 * @returns UserType
 */
export const getCurrentUser = async () => {
    const res = await axios({
        method: 'GET',
        withCredentials: true,
        url: `${authURL}/currentuser`,
    });

    // console.log(res);

    const currentUser: UserType = res.data;
    return currentUser;
};

/**
 * Logs out the user and gets rid of its current session with the server.
 */
export const logOut = async () => {
    return axios({
        method: 'GET',
        withCredentials: true,
        url: `${authURL}/logout`,
    });
};

const auth = {
    signUp,
    logIn,
    getCurrentUser,
    logOut,
};

export default auth;

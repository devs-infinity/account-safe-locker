# 🔒 Safe Locker
## Husky Installation
-  `yarn` is needed since `husky` is using it to run `prettier`
- `git pull`; make sure your codebase is up to date!
- `yarn install`; install the latest dependencies!
- `yarn prepare` or `npm run prepare`; this will install `husky`
- voila! you're ready to make a `commit`!
- *PS: you only need to do the installation once*

---

## API documentation

### `/auth/signup`

Method: POST
Params: email, username, password
Purpose: Creates a new account with the given parameters, as long as they don't exist yet.

### `/auth/login`

Method: POST
Params: usernameOrEmail, password
Purpose: Logs the user in and makes the server keep track of their session.

### `/auth/logout`

Method: GET
Purpose: Logs the user out and stops keeping track of their session.

### `/auth/currentuser`

Method: GET
Purpose: Returns the user associated with the cookie that's saved in the browser. Use this on the frontend when it mounts to check if a user is currently in session.

> These APIs should only be fetched in `auth.ts` and the functions exported in `auth.ts` will be used for easy access to the APIs without typing them all over again as well as combining some functionalities
> For example, in the logIn() function in `auth.ts`, a `getCurrentUser() ` function is immediately called and returned.

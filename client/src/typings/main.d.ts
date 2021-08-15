interface INavLinks {
  name: string;
  url: string;
}

interface FormInput {
  username: string;
  email: string;
  password: string;
}

interface RegisterFormData extends FormInput {}

interface LoginFormData {
  usernameOrEmail: string;
  password: string;
}

interface UserType {
  dateCreated: Date;
  email: string;
  username: string;
  _id: string;
}

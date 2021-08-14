import React, { useState } from "react";
import { StyledHomeForm } from "../styles/componentStyles/HomeFormStyles";
import { signUp } from "../services/auth";

interface IHomeFormProps {}

const initialFormData = {
  username: "",
  email: "",
  password: "",
};

const HomeForm: React.FC<IHomeFormProps> = ({}) => {
  const [formData, setFormData] = useState<FormInput>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(formData.email, formData.username, formData.password);
  };

  return (
    <StyledHomeForm>
      <form spellCheck='false' onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <p>Never forget for a Better Tomorrow</p>
        <input name='username' type='text' placeholder='Username' onChange={handleChange} />
        <input name='email' type='email' placeholder='Email' onChange={handleChange} />
        <input name='password' type='password' placeholder='Choose your password' onChange={handleChange} />
        <button type='submit'>Sign Up</button>
      </form>
    </StyledHomeForm>
  );
};

export default HomeForm;

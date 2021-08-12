import React from 'react';
import { StyledHomeForm } from '../styles/componentStyles/HomeFormStyles';

interface IHomeFormProps {}

const HomeForm: React.FC<IHomeFormProps> = ({}) => {

  return (
    <StyledHomeForm>
      <form>
        <h1>SIGN UP</h1>
        <p>Never forget for a better Tomorrow</p>
        <input type='text' placeholder='Username' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Choose your password' />
        <button type='submit'>Sign Up</button>
      </form>
    </StyledHomeForm>
  );
};

export default HomeForm;

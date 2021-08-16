import styled from 'styled-components';

export const StyledHomeForm = styled.div`
  width: 40%;
  padding: 1rem;
  background-color: var(--light-gray);

  form {
    display: flex;
    margin: 0 auto;
    height: 100%;
    width: 90%;
    flex-direction: column;
    text-align: left;

    h1 {
      font-weight: 800;
      margin-top: 1rem;
    }

    p {
      font-weight: 500;
      margin: 1rem 0 2rem 0;
    }

    input {
      outline: none;
      border: none;
      font-family: inherit;
      padding: 0.5rem 1rem;
      font-size: 1rem;
      margin-bottom: 1.5rem;
      border-radius: 0.3rem;
      background: #b8c5e7;
    }

    button {
      background: var(--navy-blue);
      color: var(--white);
      padding: 0.6rem;
    }
  }
`;

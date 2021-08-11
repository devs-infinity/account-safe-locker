import styled from 'styled-components';

export const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    padding: 8px 20px;
    background-color: var(--navy-blue);
  }

  .link-btn {
    transition: var(--transition);
    color: var(--white);
  }

  :hover .link-btn {
    color: var(--ocean-blue);
  }

  .submit-btn {
    transition: var(--transition);
    color: var(--white);
  }

  :hover .submit-btn {
    color: var(--ocean-blue);
  }
`;

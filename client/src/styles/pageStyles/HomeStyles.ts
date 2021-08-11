import styled from 'styled-components';

export const StyledHome = styled.main`
  width: 100%;
  height: auto;
`;

export const StyledFormSection = styled.section`
  height: calc(100vh - var(--nav-height));
  display: flex;
  justify-content: center;

  .brand-name {
    width: 60%;
    background-color: var(--navy-blue);
  }
`;

import styled from 'styled-components';

export const StyledHome = styled.main`
  width: 100%;
  height: auto;
`;

export const StyledFormSection = styled.section`
  height: 600px;
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: 0 auto;

  .branding {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    background-color: var(--navy-blue);
    position: relative;
  }

  .brand-items {
    color: var(--white);
  }

  .lock-icon {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }

  .brand-name {
    font-size: 48px;
    font-weight: 800;
  }

  .decor-1 {
    top: 20px;
    left: 110px;
  }

  .decor-2 {
    right: -20px;
    bottom: 130px;
  }

  .decor {
    position: absolute;

    ::before {
      content: '';
      position: absolute;
      height: 45px;
      width: 200px;
      top: 0;
      right: 0;
      background-color: var(--blue);
    }

    ::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -110px;
      height: 45px;
      width: 150px;
      background-color: var(--blue);
    }
  }
`;

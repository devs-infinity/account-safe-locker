import React from 'react';
import { StyledHome, StyledFormSection } from '../styles/pageStyles/HomeStyles';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
  return (
    <StyledHome>
      <StyledFormSection>
        <div>Form</div>
        <div className='brand-name'>ASDASDASD</div>
      </StyledFormSection>
    </StyledHome>
  );
};

export default Home;

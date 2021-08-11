import React from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo } from '../styles/componentStyles/LogoStyles';

const Logo = () => {
  return (
    <Link to='/'>
      <StyledLogo>SAFE LOCKER</StyledLogo>
    </Link>
  );
};

export default Logo;

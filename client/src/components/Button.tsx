import React, { AnchorHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from '../styles/componentStyles/ButtonStyles';

interface IButtonProps {
  buttonText: string;
  isLinkButton: boolean;
  link: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<IButtonProps> = ({
  buttonText,
  isLinkButton,
  link,
  target,
  rel,
}) => {
  return (
    <StyledButton>
      {isLinkButton ? (
        <Link to={link} target={target} rel={rel} className='btn link-btn'>
          {buttonText}
        </Link>
      ) : (
        <button type='submit' className='btn submit-btn'>
          {buttonText}
        </button>
      )}
    </StyledButton>
  );
};

export default Button;

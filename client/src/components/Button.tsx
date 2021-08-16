import React from 'react'
import { Link } from 'react-router-dom'
import { StyledButton } from '../styles/componentStyles/ButtonStyles'

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
        <Link to={link} target={target} rel={rel} className="btn link-btn">
          {buttonText}
        </Link>
      ) : (
        <button type="submit" className="btn submit-btn">
          {buttonText}
        </button>
      )}
    </StyledButton>
  )
}

export default Button

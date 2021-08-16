import React from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../configs/StaticData'
import { Logo, Button } from './'
import { StyledNav, StyledNavLinks } from '../styles/componentStyles/NavStyles'

interface INavProps {}

const Nav: React.FC<INavProps> = ({}) => {
  return (
    <StyledNav>
      <nav>
        <Logo />
        <StyledNavLinks>
          {navLinks.map((link) => {
            const { name, url } = link

            return (
              <li key={name}>
                <Link to={url} className="link">
                  {name}
                </Link>
              </li>
            )
          })}
          <li>
            <Button buttonText="Register" link="#contact" isLinkButton />
          </li>
        </StyledNavLinks>
      </nav>
    </StyledNav>
  )
}

export default Nav

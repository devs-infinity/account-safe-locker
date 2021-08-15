import React from 'react'
import { FiUnlock } from 'react-icons/fi'
import { HomeForm } from '../components'
import { StyledHome, StyledFormSection } from '../styles/pageStyles/HomeStyles'

import AuthTestForm from '../components/AuthTestForm'

interface IHomeProps {}

const Home: React.FC<IHomeProps> = ({}) => {
    return (
        <StyledHome>
            <StyledFormSection>
                <HomeForm />
                <div className="branding">
                    <FiUnlock className="brand-items lock-icon" />
                    <h2 className="brand-name brand-items">SAFE LOCKER</h2>
                    <span className="decor decor-1"></span>
                    <span className="decor decor-2"></span>
                </div>
            </StyledFormSection>
            <AuthTestForm />
        </StyledHome>
    )
}

export default Home

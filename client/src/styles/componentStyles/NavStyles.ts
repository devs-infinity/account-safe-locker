import styled from 'styled-components';

export const StyledNav = styled.header`
    width: 100%;
    height: var(--nav-height);
    padding: 0 var(--rl-space);

    nav {
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
`;

export const StyledNavLinks = styled.ul`
    display: flex;
    align-items: center;

    li {
        :not(:last-child) {
            margin-right: 20px;
        }
    }
`;

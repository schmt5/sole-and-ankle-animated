import * as React from 'react';
import styled from 'styled-components';
import { WEIGHTS } from '../../constants';

const NavLink = ({ children, ...deligated }) => (
    <Link {...deligated}>
        <MainText>
            {children}
        </MainText>
        <HoverText>
            {children}
        </HoverText>
    </Link>
);

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;
  position: relative;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

  const Text = styled.div`
    transition: transform 400ms;
    transform: translateY(var(--transform-from));

    ${Link}:hover & {
        transform: translateY(var(--transform-to));
        transition-duration: 250ms;
    }
  
  `;

  const MainText = styled(Text)`
    --transform-from: 0;
    --transform-to: -100%;
  `;

  const HoverText = styled(Text)`
    --transform-from: 100%;
    --transform-to: 0;

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    font-weight: ${WEIGHTS.bold};
  `;

export default NavLink;
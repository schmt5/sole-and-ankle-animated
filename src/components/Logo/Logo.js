import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';
import { animate } from 'motion';

const Logo = (props) => {
  const linkRef = useRef(null);

  useEffect(() => {
    animate('.link', {
      transform: "rotate(20deg)",
    },
    {
      duration: 1,
    })
  });

  return (
    <Link href="/">
      <Wrapper className='link' ref={linkRef} {...props}>Sole&amp;Ankle</Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.h1`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.bold};
`;

export default Logo;

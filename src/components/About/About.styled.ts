import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const AboutStyled = styled(Container)`
  padding-block: 60px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: grid;
  gap: 2.5rem;

  @media (min-width: ${(props) => props.theme.breakpoints.minWidth.md}) {
    align-items: center;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
  }
`;

export const LeftContent = styled(motion.div)`
  display: grid;
  gap: 1.25rem;
`;

export const RightContent = styled(motion.div)`
  margin-inline: auto;
  max-width: 400px;
`;

export const LinksNTechs = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-top: 1.875rem;
`;

export const Links = styled.ul`
  display: grid;

  a {
    padding-block: 0.3125rem;
  }
`;

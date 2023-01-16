import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Title } from '../Title';

export const ModalContentStyled = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
  padding-top: clamp(60px, 5vw, 60px);
  padding-bottom: clamp(20px, 5vw, 60px);
  padding-inline: clamp(20px, 5vw, 60px);
`;

export const ModalProjectTitle = styled(Title)`
  font-size: clamp(22px, 5vw, 30px);
  color: ${(props) => props.theme.colors.mdTurquoise};
  margin-bottom: 60px;
`;

export const ModalContentContainer = styled.div`
  display: grid;
  place-content: center;
  gap: 30px;

  @media (min-width: ${(props) => props.theme.breakpoints.minWidth.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ModalInfo = styled.div`
  display: grid;
  gap: 40px;
  overflow-y: auto;
`;

export const Links = styled.ul`
  display: flex;
  gap: 20px;

  a {
    padding-block: 0.3125rem;
    display: inline-block;
  }
`;

export const ModalImagePreview = styled(motion.div)`
  justify-self: center;
  max-width: 390px;
  border-radius: 6px;
  overflow: hidden;
`;

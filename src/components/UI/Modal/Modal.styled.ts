import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';

export const BackdropStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9900;
  display: grid;
  place-content: center;
`;

export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  display: grid;
  place-content: center;
  height: min-content;
  width: min(100% - 2rem, 40rem);
  margin-inline: auto;
  margin-block: auto;
  background: ${(props) => props.theme.colors.dkViolet};
  border-radius: 6px;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.minWidth.md}) {
    width: min(100% - 2rem, 60rem);
  }
`;

export const CloseModalIcon = styled(IoClose)`
  font-size: 30px;
  position: absolute;
  top: 10px;
  right: 8px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mdTurquoise};
  z-index: 10100;
`;

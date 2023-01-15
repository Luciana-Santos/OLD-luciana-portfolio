import styled from 'styled-components';
import { Container } from '../../../GlobalStyles';

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalOverlayStyled = styled(Container)`
  width: min(100% - 2rem, 40rem);
  height: max-content;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  padding: 1rem;
  border-radius: 0.25em;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  animation: slide-down 300ms ease-out forwards;
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

import { AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { ModalProjectContext } from '../../../store/ModalContext';
import {
  BackdropStyled,
  CloseModalIcon,
  ModalOverlayStyled,
} from './Modal.styled';

interface IModalProps {
  children: React.ReactNode;
}

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeIn',
      duration: 0.15,
    },
  },
};

const Backdrop: React.FC = () => {
  const { handleCloseModal } = useContext(ModalProjectContext);

  return (
    <BackdropStyled
      onClick={handleCloseModal}
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
    />
  );
};

const ModalOverlay = ({ children }: IModalProps) => {
  return (
    <AnimatePresence>
      <ModalOverlayStyled
        variants={modalAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </ModalOverlayStyled>
    </AnimatePresence>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children }: IModalProps) => {
  const { handleCloseModal } = useContext(ModalProjectContext);

  return (
    <>
      {portalElement && createPortal(<Backdrop />, portalElement)}
      {portalElement &&
        createPortal(
          <ModalOverlay>
            <CloseModalIcon onClick={handleCloseModal} />
            {children}
          </ModalOverlay>,
          portalElement
        )}
    </>
  );
};
export default Modal;

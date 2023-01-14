import { createPortal } from 'react-dom';
import { IModalProps } from '../../../types/types';

const Backdrop: React.FC = () => {
  return <Backdrop></Backdrop>;
};

const ModalOverlay: React.FC<IModalProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const portalElement = document.getElementById('overlays');

const Modal: React.FC<IModalProps> = ({ children }) => {
  return (
    <>
      {portalElement && createPortal(<Backdrop />, portalElement)}
      {portalElement &&
        createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
export default Modal;

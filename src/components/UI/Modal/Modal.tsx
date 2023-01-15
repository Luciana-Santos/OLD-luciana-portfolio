import { createPortal } from 'react-dom';

interface IModalProps {
  children: React.ReactNode;
}

export const Backdrop: React.FC = () => {
  return <Backdrop></Backdrop>;
};

const ModalOverlay: React.FC<IModalProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal: React.FC<IModalProps> = ({ children }) => {
  return (
    <>
      {portalElement && createPortal(<Backdrop />, portalElement)}
      {/* {portalElement &&
        createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)} */}
    </>
  );
};
export default Modal;

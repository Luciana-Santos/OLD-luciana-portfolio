import { createContext, useState } from 'react';
import { IModalContext, IModalProps } from '../types/types';

export const ModalProjectContext = createContext<IModalContext>(
  {} as IModalContext
);

const ModalProjectProvider = ({ children }: IModalProps) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleOpenModal = () => {
    // setisModalOpen(true);
    console.log('modal aberto');
  };

  const handleCloseModal = () => {
    // setisModalOpen(false);
    console.log('modal fechado');
  };

  return (
    <ModalProjectContext.Provider
      value={{ isModalOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalProjectContext.Provider>
  );
};

export default ModalProjectProvider;

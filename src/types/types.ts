export interface IHeroButtonProps {
  background: string;
  color: string;
  border?: boolean;
  hover: string;
}

export interface IProjectItemProps {
  title: string;
  img: string;
}

export interface IModalProps {
  children: React.ReactNode;
}

export interface IModalContext {
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
}

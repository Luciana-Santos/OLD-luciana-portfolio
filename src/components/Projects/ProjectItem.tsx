import { useContext } from 'react';
import { ModalProjectContext } from '../../store/ModalContext';
import { IProjectItemProps } from '../../types/types';
import {
  ProjectImgPreview,
  ProjectInfo,
  ProjectItem,
} from './ProjectItem.styled';

const ProjectsItem: React.FC<IProjectItemProps> = ({ title, img }) => {
  const { handleOpenModal } = useContext(ModalProjectContext);

  return (
    <ProjectItem
      onClick={handleOpenModal}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <ProjectImgPreview>
        <img src={img} alt={title} />
      </ProjectImgPreview>
      <ProjectInfo>
        <h5>{title}</h5>
      </ProjectInfo>
    </ProjectItem>
  );
};

export default ProjectsItem;

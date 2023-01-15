import { useContext } from 'react';
import { ModalProjectContext, ProjectProps } from '../../store/ModalContext';
import {
  ProjectImgPreview,
  ProjectInfo,
  ProjectItem,
} from './ProjectItem.styled';

const ProjectsItem = ({ data }: { data: ProjectProps }) => {
  const { handleOpenModal } = useContext(ModalProjectContext);

  return (
    <>
      <ProjectItem
        onClick={handleOpenModal.bind(this, data)}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <ProjectImgPreview>
          <img src={data.imagem} alt={data.title} />
        </ProjectImgPreview>
        <ProjectInfo>
          <h5>{data.title}</h5>
        </ProjectInfo>
      </ProjectItem>
    </>
  );
};

export default ProjectsItem;

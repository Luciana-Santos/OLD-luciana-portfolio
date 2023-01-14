import { Fade } from 'react-awesome-reveal';
import content from '../../content';
import { Title } from '../UI/Title';
import ProjectsItem from './ProjectItem';
import { ProjectsList, ProjectsStyled } from './Projects.styled';

const Projects: React.FC = () => {
  return (
    <ProjectsStyled as="section">
      <Fade direction="down">
        <Title>Projetos</Title>
      </Fade>

      <ProjectsList>
        {content.projects.map((project) => {
          return (
            <ProjectsItem
              key={project.id}
              title={project.title}
              img={project.imagem}
            />
          );
        })}
      </ProjectsList>
    </ProjectsStyled>
  );
};

export default Projects;

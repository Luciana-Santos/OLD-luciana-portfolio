import { Fade } from 'react-awesome-reveal';
import { Title } from '../UI/Title';
import { projects } from './content';
import ProjectsItem from './ProjectItem';
import { ProjectsList, ProjectsStyled } from './Projects.styled';

const Projects: React.FC = () => {
  return (
    <ProjectsStyled as="section">
      <Fade direction="down">
        <Title>Projetos</Title>
      </Fade>

      <ProjectsList>
        {projects.map((project) => {
          return <ProjectsItem key={project.id} data={project} />;
        })}
      </ProjectsList>
    </ProjectsStyled>
  );
};

export default Projects;

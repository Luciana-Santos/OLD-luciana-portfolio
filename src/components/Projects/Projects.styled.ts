import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const ProjectsStyled = styled(Container)`
  padding-block: 60px;
  min-height: 100vh;
`;

export const ProjectsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.875rem;
`;

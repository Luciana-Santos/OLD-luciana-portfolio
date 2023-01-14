import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ProjectItem = styled(motion.div)`
  max-width: 300px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
`;

export const ProjectImgPreview = styled.div``;

export const ProjectInfo = styled.div`
  background: ${(props) => props.theme.colors.dkViolet};
  padding: 1rem;
`;

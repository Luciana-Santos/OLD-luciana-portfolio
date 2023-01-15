import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

export const ContactStyled = styled(Container)`
  padding-block: 60px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 3.75rem;

  @media (min-width: ${(props) => props.theme.breakpoints.minWidth.md}) {
    flex-direction: row;
  }
`;

export const ContactImg = styled.div``;

export const ContactInfo = styled.div`
  p {
    margin-bottom: 2.5rem;
  }

  ul a {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

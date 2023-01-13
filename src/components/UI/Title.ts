import styled from 'styled-components';

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.ltOrange};
  font-family: ${(props) => props.theme.fonts.berkshire};
  font-size: clamp(1.875rem, 5vw, 4.125rem);
  margin-bottom: 3.75rem;
  text-align: center;
`;

import styled, { css } from 'styled-components';
import { IHeroButtonProps } from '../../types/types';

export const Button = styled.a<IHeroButtonProps>`
  border-radius: 0.375rem;
  display: grid;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.09375rem;
  padding-block: 0.625rem;
  padding-inline: 1.625rem;
  place-items: center;
  text-transform: uppercase;
  transition: 0.3s ease;
  background: ${(props) => (props.background ? props.background : '')};
  color: ${(props) => (props.color ? props.color : '')};
  border: ${({ border }) => (border ? '3px solid' : '')};

  &:hover {
    ${(props) =>
      props.hover === 'background' &&
      css`
        background: ${(props) => props.theme.colors.vdBlue};
        border-color: ${(props) => props.theme.colors.vdBlue};
      `}

    ${(props) =>
      props.hover === 'dropshadow' &&
      css`
        box-shadow: 0 0 20px ${(props) => props.theme.colors.ltOrange};
      `}
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  place-content: center;
`;

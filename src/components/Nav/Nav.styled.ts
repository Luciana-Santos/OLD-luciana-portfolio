import styled from 'styled-components';
import { Container } from '../../GlobalStyles';

interface INavprops {
  navBg: boolean;
}

export const NavStyled = styled.nav<INavprops>`
  backdrop-filter: blur(${(props) => (props.navBg ? '15px' : '')});
  background: ${(props) =>
    props.navBg ? 'rgba(7, 7, 21, 0.4)' : props.theme.colors.vdBlue};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding-block: 4px;
`;

export const NavList = styled(Container)`
  display: flex;
  row-gap: 0.625em;
  column-gap: 1.25em;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 9999;

  a {
    font-style: normal;
    text-transform: uppercase;
    padding-block: 0.625em;
    color: ${({ theme }) => theme.colors.whiteBody};
    font-weight: normal;
    letter-spacing: 0.09375rem;
    transition: all 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

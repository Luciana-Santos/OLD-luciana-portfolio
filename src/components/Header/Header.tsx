import Hero from '../Hero/Hero';
import Nav from '../Nav/Nav';
import { HeaderStyled } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <Nav />
      <Hero />
    </HeaderStyled>
  );
};
export default Header;

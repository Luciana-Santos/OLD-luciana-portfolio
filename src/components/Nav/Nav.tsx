import { useEffect, useState } from 'react';
import { NavList, NavStyled } from './Nav.styled';

const Nav: React.FC = () => {
  const [navBg, setNavBg] = useState(false);

  const handleNavBg = () => {
    window.scrollY >= 40 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavBg);

    return () => {
      window.removeEventListener('scroll', handleNavBg);
    };
  }, []);

  return (
    <NavStyled navBg={navBg}>
      <NavList as="ul">
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </NavList>
    </NavStyled>
  );
};
export default Nav;

import { Container } from '../../GlobalStyles';
import { FooterStyled } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <Container>
        <p>
          Boa parte dos direitos reservados. |{' '}
          <a href="https://github.com/Luciana-Santos" target="_blank">
            {' '}
            Luciana Santos©
          </a>{' '}
          2023
        </p>
      </Container>
    </FooterStyled>
  );
};
export default Footer;

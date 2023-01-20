import { Fade } from 'react-awesome-reveal';
import { MdOutlineMail } from 'react-icons/md';
import { Title } from '../UI/Title';
import {
  ContactImg,
  ContactInfo,
  ContactStyled,
  Content,
} from './Contact.styled';

const Contact: React.FC = () => {
  return (
    <ContactStyled as="section" id="contact">
      <Fade direction="down">
        <Title>Contato</Title>
      </Fade>

      <Content>
        <Fade direction="left">
          <ContactImg>
            <img
              src="https://github.com/Luciana-Santos/Lucianadss-portfolio/blob/main/src/assets/img/contato-img.png?raw=true"
              alt="Contato imagem"
            />
          </ContactImg>
        </Fade>

        <Fade direction="right">
          <ContactInfo>
            <p>
              Disponivel para novos projetos.
              <br />
              Entre em contato e bora bater um papo!
            </p>

            <ul>
              <li>
                <a
                  href="mailto:contato@luciana.dev"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MdOutlineMail size="40" />
                  <span>Luciydss@gmail.com</span>
                </a>
              </li>
            </ul>
          </ContactInfo>
        </Fade>
      </Content>
    </ContactStyled>
  );
};
export default Contact;

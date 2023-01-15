import { Fade } from 'react-awesome-reveal';
import content from '../../content';
import { TechsIcons } from '../../GlobalStyles';
import { Subtitle } from '../UI/Subtitle';
import { Title } from '../UI/Title';
import {
  AboutStyled,
  Content,
  LeftContent,
  Links,
  LinksNTechs,
  RightContent,
} from './About.styled';

const About: React.FC = () => {
  return (
    <AboutStyled as="section" id="about">
      <Fade direction="down">
        <Title>Sobre</Title>
      </Fade>
      <Content>
        <Fade direction="left">
          <LeftContent>
            <p>
              Sou Luciana Santos, 25 anos, residente de São Paulo-SP e
              Desenvolvedora front end.
            </p>
            <p>
              Minha parte favorita em trabalhar com desenvolvimento web é a
              possibilidade de transformar ideias em linhas de códigos
              executáveis e ver o resultado fluir na tela. Estou sempre
              aprendendo algo novo e subindo mais um degrau para chegar no meu
              objetivo, que não é estático e está em constante desenvolvimento.
            </p>

            <LinksNTechs>
              <div>
                <Subtitle>Links:</Subtitle>
                <Links>
                  {content.sobreLinks.map((link) => {
                    return (
                      <li key={link.id}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    );
                  })}
                </Links>
              </div>
              <div>
                <Subtitle>Tecnologias:</Subtitle>
                <TechsIcons>
                  {content.sobreTechs.map((tech) => {
                    return (
                      <li key={tech.id}>
                        <img src={tech.icon} alt={tech.name} />
                        <span>{tech.name}</span>
                      </li>
                    );
                  })}
                </TechsIcons>
              </div>
            </LinksNTechs>
          </LeftContent>
        </Fade>

        <Fade direction="right">
          <RightContent>
            <img
              src="https://raw.githubusercontent.com/Luciana-Santos/Lucianadss-portfolio/main/src/assets/img/sobre-section.png"
              alt=""
            />
          </RightContent>
        </Fade>
      </Content>
    </AboutStyled>
  );
};

export default About;

import { useScroll, useTransform } from 'framer-motion';
import { Button, ButtonContainer } from '../UI/Button';
import {
  HeroImgBack,
  HeroImgFront,
  HeroStyled,
  Info,
  Message,
} from './Hero.styled';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 240]);
  const y2 = useTransform(scrollY, [0, 400], [0, -100]);

  return (
    <HeroStyled>
      <HeroImgBack />
      <Info style={{ y: y1, x: 0 }}>
        <Message>
          <h1>
            Olá, sou <span>Luciana</span>
          </h1>
          <p>Desenvolvedora front-end</p>
        </Message>
        <ButtonContainer>
          <Button
            href="#contato"
            background="hsla(36, 88%, 77%, 1)"
            color="hsla(240, 50%, 5%, 1)"
            hover="dropshadow"
          >
            Contato
          </Button>
          <Button
            href="#"
            background="transparent"
            color="hsla(36, 88%, 77%, 1)"
            border={true}
            hover="background"
          >
            Currículo
          </Button>
        </ButtonContainer>
      </Info>
      <HeroImgFront style={{ y: y2, x: 0 }} />
    </HeroStyled>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HeroStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.dkViolet};
  min-height: 60vh;
  margin-top: 45px;
  position: relative;
  display: grid;
  justify-content: center;
  padding-top: clamp(3.75rem, 5vw, 6rem);
  text-align: center;
  overflow: hidden;

  > img {
    background-size: cover;
    background-position: bottom;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.minWidth.lg}) {
    height: calc(100vh - 64px);
  }
`;

export const HeroImgBack = styled(motion.div)`
  background: url('https://i.postimg.cc/PfpXygB0/Untitled-2.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 50;
  pointer-events: none;
`;

export const HeroImgFront = styled(motion.div)`
  background: url('https://i.postimg.cc/NFJB7txN/Untitled-1.png') no-repeat;
  background-size: cover;
  background-position: bottom;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  pointer-events: none;
`;

export const Info = styled(motion.div)`
  display: flex;
  gap: 40px;
  flex-direction: column;
  padding-inline: 20px;
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  > h1 {
    font-size: clamp(1.25rem, 5vw, 2.375rem);
    color: ${(props) => props.theme.colors.mdTurquoise};

    span {
      font-size: clamp(2.25rem, 5vw, 4.125rem);
      color: ${(props) => props.theme.colors.ltOrange};
      font-family: ${(props) => props.theme.fonts.berkshire};
    }
  }

  > p {
    font-size: clamp(1rem, 4vw, 1.625rem);
    margin-bottom: clamp(2rem, 1vw, 5rem);
    color: ${(props) => props.theme.colors.mdTurquoise};
  }
`;

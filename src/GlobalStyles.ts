import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.mdGreen};
    font-style: italic;
    font-weight: 700;
    text-decoration: none;
    transition: .3s ease;
    display: block;
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 100vh;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.space};
    background-color: ${({ theme }) => theme.colors.vdBlue};
    color: ${({ theme }) => theme.colors.whiteBody};
    position: relative;
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
`;

export const TechsIcons = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;

  > li {
    max-width: 49px;
    position: relative;

    &:hover span {
      display: block;
    }
  }

  span {
    background: ${(props) => props.theme.colors.dkViolet};
    border-radius: 0.25rem;
    bottom: -40px;
    display: none;
    font-size: 0.75rem;
    left: 50%;
    letter-spacing: 1px;
    padding: 0.3125rem;
    position: absolute;
    transform: translateX(-50%);
    z-index: 999;
  }
`;

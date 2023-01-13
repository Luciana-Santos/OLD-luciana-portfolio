import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  }

  ul {
    list-style: none;
  }

  body {
    min-height: 400vh;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.space};
    background-color: ${({ theme }) => theme.colors.vdBlue};
    color: ${({ theme }) => theme.colors.whiteBody};
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
`;

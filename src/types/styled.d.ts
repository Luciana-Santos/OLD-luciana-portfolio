import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      berkshire: string;
      space: string;
    };
    colors: {
      white: string;
      whiteBody: string;
      vdBlue: string;
      mdGreen: string;
      dkViolet: string;
      dkPurple: string;
      mdTurquoise: string;
      ltOrange: string;
      mdOrange: string;
    };
    breakpoints: {
      minWidth: {
        md: string;
        lg: string;
        xlg: string;
      };
      maxWidth: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}

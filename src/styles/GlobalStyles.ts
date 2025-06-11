import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';
import 'styled-components';

// Add type definitions for the theme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  h1 {
    font-size: 3rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: all ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
    cursor: pointer;
  }

  section {
    padding: 5rem 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: 3rem 0;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

export default GlobalStyles;

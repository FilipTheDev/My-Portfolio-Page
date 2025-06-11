export interface ThemeType {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    lightText: string;
    darkBackground: string;
  };
  fonts: {
    main: string;
    heading: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    default: string;
    slow: string;
    fast: string;
  };
}

export const theme: ThemeType = {
  colors: {
    primary: '#3a86ff', // Blue
    secondary: '#8338ec', // Purple
    accent: '#ffbe0b', // Yellow
    background: '#fcfcfc',
    text: '#2b2d42',
    lightText: '#8d99ae',
    darkBackground: '#1a1b26'
  },
  fonts: {
    main: "'Inter', 'Roboto', sans-serif",
    heading: "'Poppins', sans-serif"
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  transitions: {
    default: '0.3s ease',
    slow: '0.6s ease',
    fast: '0.15s ease'
  }
};

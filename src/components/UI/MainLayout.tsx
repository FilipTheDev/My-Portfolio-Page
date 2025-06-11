import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyles';
import Navbar from '../Navbar/Navbar';
import Footer from '../UI/Footer';
import MetaTags from './MetaTags';

interface MainLayoutProps {
  children: ReactNode;
  userInfo: {
    name: string;
    title?: string;
    description?: string;
    githubUrl?: string;
    linkedinUrl?: string;
  };
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, userInfo }) => {
  const siteTitle = `${userInfo.name} | ${userInfo.title || 'Portfolio'}`;
  const siteDescription = userInfo.description || `Professional portfolio website of ${userInfo.name}`;
  
  return (
    <ThemeProvider theme={theme}>
      <MetaTags 
        title={siteTitle}
        description={siteDescription}
        name={userInfo.name}
      />
      <GlobalStyles />
      <Navbar yourName={userInfo.name} />
      <main>{children}</main>
      <Footer 
        name={userInfo.name} 
        githubUrl={userInfo.githubUrl} 
        linkedinUrl={userInfo.linkedinUrl} 
      />
    </ThemeProvider>
  );
};

export default MainLayout;

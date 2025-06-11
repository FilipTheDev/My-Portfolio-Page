import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Container } from './StyledComponents';

const FooterContainer = styled.footer`
  padding: 3rem 0;
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: white;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  opacity: 0.8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1.2rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

interface FooterProps {
  name: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  name, 
  githubUrl, 
  linkedinUrl 
}) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <Copyright>
            &copy; {currentYear} {name}. All Rights Reserved.
          </Copyright>
          
          <SocialLinks>
            {githubUrl && (
              <SocialLink 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
            )}
            
            {linkedinUrl && (
              <SocialLink 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </SocialLink>
            )}
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

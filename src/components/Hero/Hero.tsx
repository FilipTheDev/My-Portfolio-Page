import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Button, Container, FlexContainer } from '../UI/StyledComponents';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 1) 0%, 
    rgba(242, 246, 255, 1) 100%
  );
  overflow: hidden;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 600px;
  z-index: 10;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled(motion.h3)`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 400;
`;

const HeroText = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 500px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const BackgroundShape = styled(motion.div)<{ top?: string; right?: string; bottom?: string; left?: string; size: string }>`
  position: absolute;
  top: ${({ top }) => top || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
  left: ${({ left }) => left || 'auto'};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: linear-gradient(
    45deg, 
    rgba(58, 134, 255, 0.2) 0%,
    rgba(131, 56, 236, 0.2) 100%
  );
  filter: blur(50px);
  z-index: 1;
`;

const ProfileImage = styled(motion.img)`
  width: 400px;
  height: auto;
  border-radius: 10px;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  z-index: 5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 300px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

interface HeroProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  description,
  imageUrl,
  resumeUrl,
  githubUrl,
  linkedinUrl
}) => {
  const nameArray = name.split(' ');
  const firstName = nameArray[0];
  const lastName = nameArray.slice(1).join(' ');
  
  return (
    <HeroSection id="home">
      <BackgroundShape 
        size="400px" 
        top="-100px" 
        right="20%" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <BackgroundShape 
        size="300px" 
        bottom="10%" 
        left="5%" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      <Container>
        <FlexContainer 
          align="center" 
          justify="space-between"
        >
          <HeroContent>
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </HeroSubtitle>
            
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>{firstName}</span> {lastName}
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {title}
            </HeroSubtitle>
            
            <HeroText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {description}
            </HeroText>
            
            <ButtonContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button as="a" href="#projects">View Projects</Button>
              {resumeUrl && (
                <Button as="a" href={resumeUrl} target="_blank" rel="noopener noreferrer" outline>
                  Download Resume
                </Button>
              )}
            </ButtonContainer>
            
            <SocialIcons>
              {githubUrl && (
                <SocialIcon 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <FaGithub />
                </SocialIcon>
              )}
              
              {linkedinUrl && (
                <SocialIcon 
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <FaLinkedinIn />
                </SocialIcon>
              )}
            </SocialIcons>
          </HeroContent>
          
          {imageUrl && (
            <ProfileImage 
              src={imageUrl} 
              alt={name}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          )}
        </FlexContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle, FlexContainer } from '../UI/StyledComponents';

const AboutSection = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const AboutContent = styled(FlexContainer)`
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.accent};
    z-index: 1;
    border-radius: 10px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 350px;
  }
`;

const AboutTextContent = styled(motion.div)`
  flex: 1.5;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

const AboutDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface AboutProps {
  image: string;
  bio: string[];
  details: {
    name: string;
    email: string;
    phone?: string;
    location: string;
    birthday?: string;
    experience?: string;
    education?: string;
    freelance?: string;
  };
}

const About: React.FC<AboutProps> = ({ image, bio, details }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutImageContainer
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AboutImage src={image} alt="Profile" />
          </AboutImageContainer>
          
          <AboutTextContent
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {bio.map((paragraph, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
              >
                <AboutText>
                  {paragraph}
                </AboutText>
              </motion.div>
            ))}
            
            <AboutDetails>
              {details.name && (
                <DetailItem>
                  <span>Name:</span>
                  <span>{details.name}</span>
                </DetailItem>
              )}
              
              {details.email && (
                <DetailItem>
                  <span>Email:</span>
                  <span>{details.email}</span>
                </DetailItem>
              )}
              
              {details.phone && (
                <DetailItem>
                  <span>Phone:</span>
                  <span>{details.phone}</span>
                </DetailItem>
              )}
              
              {details.location && (
                <DetailItem>
                  <span>Location:</span>
                  <span>{details.location}</span>
                </DetailItem>
              )}
              
              {details.birthday && (
                <DetailItem>
                  <span>Birthday:</span>
                  <span>{details.birthday}</span>
                </DetailItem>
              )}
              
              {details.experience && (
                <DetailItem>
                  <span>Experience:</span>
                  <span>{details.experience}</span>
                </DetailItem>
              )}
              
              {details.education && (
                <DetailItem>
                  <span>Education:</span>
                  <span>{details.education}</span>
                </DetailItem>
              )}
              
              {details.freelance && (
                <DetailItem>
                  <span>Freelance:</span>
                  <span>{details.freelance}</span>
                </DetailItem>
              )}
            </AboutDetails>
          </AboutTextContent>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About;

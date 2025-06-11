import React from 'react';
import styled from 'styled-components';
import { Container, Button } from '../components/UI/StyledComponents';
import { motion } from 'framer-motion';

const NotFoundContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Content = styled(motion.div)`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 8rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const NotFoundPage: React.FC = () => {
  return (
    <NotFoundContainer>
      <Container>
        <Content
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>404</Title>
          <Subtitle>Page Not Found</Subtitle>
          <Description>
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </Description>
          <ButtonWrapper>
            <Button as="a" href="/">
              Back to Home
            </Button>
          </ButtonWrapper>
        </Content>
      </Container>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

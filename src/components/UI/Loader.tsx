import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation: ${spin} 1s ease-in-out infinite;
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
};

export default Loader;

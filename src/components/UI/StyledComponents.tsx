import styled from 'styled-components';

export const Button = styled.button<{ secondary?: boolean; outline?: boolean }>`
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.default};
  background-color: ${({ theme, secondary, outline }) => 
    outline ? 'transparent' : 
    secondary ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, outline }) => 
    outline ? theme.colors.primary : '#ffffff'};
  border: ${({ theme, secondary, outline }) => 
    outline ? `2px solid ${secondary ? theme.colors.secondary : theme.colors.primary}` : 'none'};
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme, secondary, outline }) => 
      outline ? (secondary ? theme.colors.secondary : theme.colors.primary) : 
      secondary ? '#7028d7' : '#1a75ff'};
    color: #ffffff;
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

export const Section = styled.section`
  padding: 5rem 0;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 3rem 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const SectionTitle = styled.h2`
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns || 3}, 1fr);
  grid-gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  transition: transform ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FlexContainer = styled.div<{ 
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
`;

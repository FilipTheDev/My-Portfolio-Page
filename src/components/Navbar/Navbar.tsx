import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Container } from '../UI/StyledComponents';

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: ${({ scrolled }) => (scrolled ? '0.8rem' : '1.5rem')} 0;
  background-color: ${({ scrolled, theme }) => 
    scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => (scrolled ? 'blur(10px)' : 'none')};
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 5px 20px rgba(0, 0, 0, 0.08)' : 'none'};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const NavContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.heading};
  
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  z-index: 2000;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 5rem;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform ${({ theme }) => theme.transitions.default};
  }
`;

const NavItem = styled(motion.a)`
  margin: 0 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  text-decoration: none;
  position: relative;
  font-size: 1rem;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
    font-size: 1.2rem;
  }
`;

interface NavbarProps {
  yourName: string;
}

const Navbar: React.FC<NavbarProps> = ({ yourName }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavContent>
        <Logo>
          <a href="#home">
            <span>{yourName.split(' ')[0]}</span>
            {yourName.split(' ').slice(1).join(' ')}
          </a>
        </Logo>
        
        <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
        
        <NavItems isOpen={isMenuOpen}>
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.name}
            </NavItem>
          ))}
        </NavItems>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;

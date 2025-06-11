import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container, SectionTitle } from '../UI/StyledComponents';

const ProjectsSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active }) => 
    active ? '#fff' : 'inherit'};
  border: ${({ active, theme }) => 
    active ? 'none' : `1px solid ${theme.colors.lightText}`};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : theme.colors.lightText};
    color: ${({ active }) => 
      active ? '#fff' : '#fff'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div<{ bgImage: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: translateY(-3px);
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.8rem;
  font-size: 1.3rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => `${theme.colors.primary}10`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectCardContainer = styled.div`
  &:hover ${ProjectImage}::before {
    opacity: 1;
  }
  
  &:hover ${ProjectOverlay} {
    opacity: 1;
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  codeUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Extract unique categories from projects
  const uniqueCategories = Array.from(
    new Set(
      projects.flatMap(project => 
        project.category.includes('-') 
          ? project.category.split('-') 
          : project.category
      )
    )
  );
  const categories = ['all', ...uniqueCategories];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === activeFilter || 
        (project.category.includes('-') && project.category.split('-').includes(activeFilter))
      );
  
  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        
        <FilterContainer>
          {categories.map((category, index) => (
            <FilterButton 
              key={index}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <AnimatePresence>
          <ProjectsGrid>
            {filteredProjects.map(project => (
              <ProjectCardContainer key={project.id}>
                <ProjectCard
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <ProjectImage bgImage={project.image}>
                    <ProjectOverlay>
                      {project.demoUrl && (
                        <ProjectLink href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <FaExternalLinkAlt />
                        </ProjectLink>
                      )}
                      {project.codeUrl && (
                        <ProjectLink href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                          <FaGithub />
                        </ProjectLink>
                      )}
                    </ProjectOverlay>
                  </ProjectImage>
                  <ProjectContent>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <TagsContainer>
                      {project.tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                      ))}
                    </TagsContainer>
                  </ProjectContent>
                </ProjectCard>
              </ProjectCardContainer>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;

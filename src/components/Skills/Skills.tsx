import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, SectionTitle } from '../UI/StyledComponents';

const SkillsSection = styled.section`
  padding: 6rem 0;
  background-color: #ffffff;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SkillsCategoryTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const SkillCard = styled(motion.div)`
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const SkillLevel = styled.div<{ level: number }>`
  width: 100%;
  height: 6px;
  background-color: #e9ecef;
  border-radius: 3px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${({ level }) => `${level}%`};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 3px;
  }
`;

const ExperienceTimeline = styled.div`
  position: relative;
  padding-left: 10px;
  
  &::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #e9ecef;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    padding-left: 45px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  left: -7px;
  top: 6px;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 13px;
  }
`;

const TimelineDate = styled.div`
  width: 180px;
  padding-right: 2rem;
  padding-left: 15px;
  font-weight: 500;
  position: relative;
  z-index: 2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  padding: 0 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0;
  }
`;

const TimelineTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
`;

const TimelineCompany = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  white-space: pre-line;
`;

interface Skill {
  name: string;
  icon: string;
  level?: number;
}

interface Experience {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  description: string;
}

interface SkillsProps {
  technicalSkills: Skill[];
  softSkills?: Skill[];
  experience: Experience[];
  education: Education[];
}

const Skills: React.FC<SkillsProps> = ({ 
  technicalSkills, 
  softSkills, 
  experience, 
  education 
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Experience</SectionTitle>
        
        <SkillsContainer>
          <div>
            <SkillsCategoryTitle>Technical Skills</SkillsCategoryTitle>
            <SkillsGrid 
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technicalSkills.map((skill, index) => (
                <SkillCard key={index} variants={itemVariants}>
                  <SkillIcon>
                    <img src={skill.icon} alt={skill.name} />
                  </SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  {skill.level && <SkillLevel level={skill.level} />}
                </SkillCard>
              ))}
            </SkillsGrid>
          </div>
          
          {softSkills && softSkills.length > 0 && (
            <div>
              <SkillsCategoryTitle>Soft Skills</SkillsCategoryTitle>
              <SkillsGrid 
                as={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {softSkills.map((skill, index) => (
                  <SkillCard key={index} variants={itemVariants}>
                    <SkillIcon>
                      <img src={skill.icon} alt={skill.name} />
                    </SkillIcon>
                    <SkillName>{skill.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillsGrid>
            </div>
          )}
          
          <div>
            <SkillsCategoryTitle>Work Experience</SkillsCategoryTitle>
            <ExperienceTimeline>
              {experience.map((exp) => (
                <TimelineItem 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TimelineDot />
                  <TimelineDate>{exp.date}</TimelineDate>
                  <TimelineContent>
                    <TimelineTitle>{exp.title}</TimelineTitle>
                    <TimelineCompany>{exp.company}</TimelineCompany>
                    <TimelineDescription>{exp.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </ExperienceTimeline>
          </div>
          
          <div>
            <SkillsCategoryTitle>Education</SkillsCategoryTitle>
            <ExperienceTimeline>
              {education.map((edu) => (
                <TimelineItem 
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <TimelineDot />
                  <TimelineDate>{edu.date}</TimelineDate>
                  <TimelineContent>
                    <TimelineTitle>{edu.degree}</TimelineTitle>
                    <TimelineCompany>{edu.institution}</TimelineCompany>
                    <TimelineDescription>{edu.description}</TimelineDescription>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </ExperienceTimeline>
          </div>
        </SkillsContainer>
      </Container>
    </SkillsSection>
  );
};

export default Skills;

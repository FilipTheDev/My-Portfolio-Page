import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';
import { heroData, aboutData, projectsData, skillsData, contactData } from '../data/portfolioData';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero 
        name={heroData.name}
        title={heroData.title}
        description={heroData.description}
        imageUrl={heroData.imageUrl}
        resumeUrl={heroData.resumeUrl}
        githubUrl={heroData.githubUrl}
        linkedinUrl={heroData.linkedinUrl}
      />
      
      <About 
        image={aboutData.image}
        bio={aboutData.bio}
        details={aboutData.details}
      />
      
      <Projects projects={projectsData} />
      
      <Skills 
        technicalSkills={skillsData.technicalSkills}
        softSkills={skillsData.softSkills}
        experience={skillsData.experience}
        education={skillsData.education}
      />
      
      <Contact 
        email={contactData.email}
        phone={contactData.phone}
        location={contactData.location}
        formspreeEndpoint={contactData.formspreeEndpoint}
      />
    </>
  );
};

export default HomePage;

import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { Container, SectionTitle, Button } from '../UI/StyledComponents';

const ContactSection = styled.section`
  padding: 6rem 0;
  background-color: #f8f9fa;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(58, 134, 255, 0.2);
`;

const ContactInfoTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  color: white;
`;

const ContactInfoText = styled.p`
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  margin-bottom: 2rem;
  font-size: 1.5rem;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.8rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  text-align: center;
`;

interface ContactProps {
  email: string;
  phone?: string;
  location: string;
  formspreeEndpoint?: string; // For form submissions
}

const Contact: React.FC<ContactProps> = ({ 
  email, 
  phone, 
  location, 
  formspreeEndpoint = 'https://formspree.io/f/mgvyajgw' // Default value for Formspree endpoint
}) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Use Formspree to send the form data
      const formData = new FormData();
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', formState.subject);
      formData.append('message', formState.message);
      formData.append('_replyto', formState.email); // This ensures replies go to the user's email
      
      // Send to our destination email
      formData.append('_subject', `Portfolio Contact: ${formState.subject}`);
      formData.append('to', 'tomevskif+portfolio@gmail.com');
      
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after some time
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setError('Failed to send your message. Please try again or email directly to tomevskif+portfolio@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        
        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Let's talk about everything!</ContactInfoTitle>
            <ContactInfoText>
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </ContactInfoText>
            
            <ContactInfoItems>
              {email && (
                <ContactInfoItem>
                  <IconBox>
                    <FaEnvelope />
                  </IconBox>
                  <span>{email}</span>
                </ContactInfoItem>
              )}
              
              {phone && (
                <ContactInfoItem>
                  <IconBox>
                    <FaPhone />
                  </IconBox>
                  <span>{phone}</span>
                </ContactInfoItem>
              )}
              
              {location && (
                <ContactInfoItem>
                  <IconBox>
                    <FaMapMarkerAlt />
                  </IconBox>
                  <span>{location}</span>
                </ContactInfoItem>
              )}
            </ContactInfoItems>
          </ContactInfo>
          
          <ContactForm ref={formRef} onSubmit={handleSubmit}>
            <FormTitle>Send a Message</FormTitle>
            
            <FormGrid>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
            </FormGrid>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                placeholder="Subject"
                value={formState.subject}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                required 
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </SubmitButton>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you! Your message has been sent successfully.
              </SuccessMessage>
            )}
            
            {error && (
              <SuccessMessage
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ backgroundColor: '#f8d7da', color: '#721c24' }}
              >
                {error}
              </SuccessMessage>
            )}
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;

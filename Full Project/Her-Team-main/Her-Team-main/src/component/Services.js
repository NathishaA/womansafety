import React from 'react';
import { FaBicycle, FaBed, FaDumbbell, FaBrain, FaShieldAlt, FaStethoscope, FaCar, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Typography, Container, Box, Button, TextField } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element } from 'react-scroll';
import SendIcon from '@mui/icons-material/Send';
import Nav from './Nav';
import styled from 'styled-components';

// Styled components
const Section = styled.div`
  padding: 60px 0;
`;

const Footer = styled.footer`
  background-color: #ff66a3;
  color: white;
  padding: 20px;
  text-align: center;
  margin-top: auto;
`;

const FooterText = styled(Typography)`
  margin: 10px 0;
`;

const Title = styled(Typography)`
  margin-bottom: 24px;
  color: black;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid #ff66a3;
  border-radius: 8px;
  text-align: center;
`;

const ServiceIconBox = styled.div`
  font-size: 40px;
  color: #ff66a3;
  margin-bottom: 16px;
`;

const ServiceTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ServiceDescription = styled(Typography)`
  font-size: 16px;
`;

const ContactSection = styled(Section)`
  margin-top: 1px;
  color: black;
  border: 3px dashed #ff66a3;
  margin: 70px;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 16px;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 24px;
`;

const NapkinLogo = styled.img`
  width: 60px; // Adjust the size as needed
  height: auto;
  margin-bottom: 16px;
`;

const Services = () => {
  const handleLogout = () => {
    // Add your logout functionality here
    console.log('Logout button clicked');
  };

  return (
    <>
      <Box>
        <Nav />
        <Element name="home">
          <Box sx={{ height: '100vh', position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                color: 'white',
                padding: '0 20px',
                marginTop: '-64px',
                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://img.freepik.com/premium-photo/portrait-beautiful-cheerful-young-brunette-woman-with-bright-makeup-wearing-fashionable-clothes-standing-isolated-pink-wall-holding-purse-posing_171337-119110.jpg?w=740)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
                Help Her Service
              </Typography>
              <Typography variant="h5" component="h2" sx={{ mb: 4 }}>
                Get sanitary napkins delivered to your doorstep quickly and discreetly.
              </Typography>
              <Typography variant="h6" component="p" sx={{ mb: 4 }}>
                Ensuring your hygiene needs are met with utmost care and privacy.
              </Typography>
              <Box>
                <Button
                  variant="contained" component={RouterLink} to="/menstruals"
                  endIcon={<SendIcon />}
                  size="large"
                  style={{
                    backdropFilter: 'blur(10px)',
                    padding:'10px',
                    background: '#ff66a3',
                    borderRadius: '100px',
                    color: 'white',
                  }}
                >
                  Need Help
                </Button>
              </Box>
            </Box>
          </Box>
        </Element>

        <Element name="features">
          <Container maxWidth={false} sx={{backgroundColor: 'pink' }}>
            <Section sx={{p:10}}>
              <Title variant="h4" component="div" style={{ textAlign: 'center',marginBottom:'10px' }}>
                Other Services
              </Title>
              <ServicesGrid>
                <RouterLink to="/bike-ride" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaBicycle /></ServiceIconBox>
                    <ServiceTitle>Female Bike Ride</ServiceTitle>
                    <ServiceDescription>Safe and reliable bike rides for women, by women.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/rooms" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaBed /></ServiceIconBox>
                    <ServiceTitle>Room Booking</ServiceTitle>
                    <ServiceDescription>Secure and comfortable room booking options.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/fitness" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaDumbbell /></ServiceIconBox>
                    <ServiceTitle>Fitness Services</ServiceTitle>
                    <ServiceDescription>Personalized fitness services to keep you healthy and fit.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/mental-counselling" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaBrain /></ServiceIconBox>
                    <ServiceTitle>Mental Counseling</ServiceTitle>
                    <ServiceDescription>Professional mental health counseling and support.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/cyber-crime" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaShieldAlt /></ServiceIconBox>
                    <ServiceTitle>Cyber Crime Reporting</ServiceTitle>
                    <ServiceDescription>Report cyber crimes and receive assistance promptly.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/pregnancy" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaStethoscope /></ServiceIconBox>
                    <ServiceTitle>Doctor Consultations</ServiceTitle>
                    <ServiceDescription>Consult with gynecologists and other specialists.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/delivery" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                    <ServiceIconBox><FaCar /></ServiceIconBox>
                    <ServiceTitle>Pick and Drop</ServiceTitle>
                    <ServiceDescription>Convenient pick and drop services for your daily needs.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
                <RouterLink to="/menstruals" style={{ textDecoration: 'none' }}>
                  <ServiceCard>
                  <ServiceIconBox><FaStethoscope /></ServiceIconBox>
                    <ServiceTitle>Napkins Delivery</ServiceTitle>
                    <ServiceDescription>Convenient and discreet delivery of sanitary napkins to your doorstep.</ServiceDescription>
                  </ServiceCard>
                </RouterLink>
              </ServicesGrid>
            </Section>
          </Container>
        </Element>

        <Element name="contact">
          <ContactSection>
            <Container maxWidth="sm">
              <Title variant="h4" component="div" style={{ color: 'black' }}>
                Feedback
              </Title>
              <ContactForm>
                <TextField label="Name" variant="outlined" fullWidth required InputLabelProps={{ style: { color: 'black' } }} sx={{ input: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' } } }} />
                <TextField label="Email" variant="outlined" fullWidth required InputLabelProps={{ style: { color: 'black' } }} sx={{ input: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' } } }} />
                <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} InputLabelProps={{ style: { color: 'black' } }} sx={{ input: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' } } }} />
                <Button type="submit" variant="contained" size="large" sx={{ background: '#ff66a3', color: 'white', alignSelf: 'center', borderRadius: '100px' }}>
                  Send Message
                </Button>
              </ContactForm>
              <SocialMediaIcons>
                <SocialIcon href="https://facebook.com" target="_blank"><FaFacebook /></SocialIcon>
                <SocialIcon href="https://twitter.com" target="_blank"><FaTwitter /></SocialIcon>
                <SocialIcon href="https://instagram.com" target="_blank"><FaInstagram /></SocialIcon>
                <SocialIcon href="https://linkedin.com" target="_blank"><FaLinkedin /></SocialIcon>
              </SocialMediaIcons>
            </Container>
          </ContactSection>
        </Element>
        <Footer>
          <FooterText variant="body2">
            © {new Date().getFullYear()} Help Her. All rights reserved.
          </FooterText>
          <FooterText variant="body2">
            <RouterLink to="/privacy-policy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</RouterLink> | 
            <RouterLink to="/terms-of-service" style={{ color: 'white', textDecoration: 'none' }}> Terms of Service</RouterLink>
          </FooterText>
        </Footer>
      </Box>
    </>
  );
};

export default Services;

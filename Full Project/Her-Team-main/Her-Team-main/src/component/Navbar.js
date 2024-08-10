import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { FaBicycle, FaBed, FaDumbbell, FaBrain, FaShieldAlt, FaStethoscope, FaCar } from 'react-icons/fa';
import { Link as ScrollLink, Element } from 'react-scroll';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';

// Styled components
const Section = styled.div`
  padding: 60px 0;
`;

const Title = styled(Typography)`
  margin-bottom: 24px;
  color: black;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServiceCard = styled.div`
  flex: 1 1 30%;
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

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ReviewCard = styled.div`
  padding: 20px;
  background: white;
  border: 1px solid #ff66a3;
  border-radius: 8px;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewName = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`;

const ReviewRating = styled(Typography)`
  font-size: 18px;
  color: #ff66a3;
`;

const ReviewDescription = styled(Typography)`
  font-size: 16px;
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

function Navbar(props) {
  const { window } = props;

  useEffect(() => {
    if (window) {
      const handleResize = () => {
        // Custom logic for window resize
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [window]);

  return (
    <>
      <Box>
      <AppBar position="fixed" sx={{ backgroundColor: '#ff66a3', color: 'white' }}>
          <Container maxWidth={false}>
            <Toolbar disableGutters>
              {/* Logo */}
              <Box sx={{ flexGrow: 1 }}>
                <ScrollLink to="home" spy={true} smooth={true}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', md: 'flex' }, color: 'white', cursor: 'pointer' }}
                  >
                    Help Her
                  </Typography>
                </ScrollLink>
              </Box>

              {/* Navigation Buttons */}
              <Box sx={{ display: 'flex', gap: 2 }}>
                <ScrollLink to="home" spy={true} smooth={true}>
                  <Button sx={{ color: 'white' }}>Home</Button>
                </ScrollLink>
                <ScrollLink to="features" spy={true} smooth={true}>
                  <Button sx={{ color: 'white' }}>Features</Button>
                </ScrollLink>
                <ScrollLink to="about-us" spy={true} smooth={true}>
                  <Button sx={{ color: 'white' }}>About Us</Button>
                </ScrollLink>
                <ScrollLink to="reviews" spy={true} smooth={true}>
                  <Button sx={{ color: 'white' }}>Reviews</Button>
                </ScrollLink>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box sx={{ mt: 5, mb: 5 }}>
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
                  background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(https://img.freepik.com/premium-photo/portrait-beautiful-cheerful-young-brunette-woman-with-bright-makeup-wearing-fashionable-clothes-standing-isolated-pink-wall-holding-purse-posing_171337-119110.jpg?w=740)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
                  Welcome to Help Her
                </Typography>
                <Box>
                  <Button
                    variant="outlined" component={RouterLink} to="/login"
                    size="large"
                    style={{
                      backdropFilter: 'blur(10px)',
                      borderRadius:'100px',
                      background: 'white',
                      // border: '1px solid #ff66a3',
                      color: '#ff66a3',
                      fontWeight: 'bold',
                      marginRight: '1rem',
                    }}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    size="large"
                    style={{
                      backdropFilter: 'blur(10px)',
                      background: '#ff66a3',
                      borderRadius:'100px',
                      // border: '1px solid white',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    Emergency
                  </Button>
                </Box>
              </Box>
            </Box>
          </Element>

          <Element name="features">
            <Container maxWidth={false} disableGutters sx={{ backgroundColor:'pink',width:'100%',p:8}}>
              <Section>
                <Title variant="h3" component="div" style={{textAlign:'center'}}>
                  Features
                </Title>
                <ServicesGrid>
                  <ServiceCard>
                    <ServiceIconBox><FaBicycle /></ServiceIconBox>
                    <ServiceTitle>Female Bike Ride</ServiceTitle>
                    <ServiceDescription>Safe and reliable bike rides for women, by women.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaBed /></ServiceIconBox>
                    <ServiceTitle>Room Booking</ServiceTitle>
                    <ServiceDescription>Secure and comfortable room booking options.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaDumbbell /></ServiceIconBox>
                    <ServiceTitle>Fitness Services</ServiceTitle>
                    <ServiceDescription>Personalized fitness services to keep you healthy and fit.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaBrain /></ServiceIconBox>
                    <ServiceTitle>Mental Counseling</ServiceTitle>
                    <ServiceDescription>Professional mental health counseling and support.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaShieldAlt /></ServiceIconBox>
                    <ServiceTitle>Cyber Crime Reporting</ServiceTitle>
                    <ServiceDescription>Report cyber crimes and receive assistance promptly.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaStethoscope /></ServiceIconBox>
                    <ServiceTitle>Doctor Consultations</ServiceTitle>
                    <ServiceDescription>Consult with gynecologists and other specialists.</ServiceDescription>
                  </ServiceCard>
                  <ServiceCard>
                    <ServiceIconBox><FaCar /></ServiceIconBox>
                    <ServiceTitle>Pick and Drop</ServiceTitle>
                    <ServiceDescription>Convenient pick and drop services for your daily needs.</ServiceDescription>
                  </ServiceCard>
                </ServicesGrid>
              </Section>
            </Container>
          </Element>

          <Element name="about-us">
            <Container maxWidth={false} disableGutters sx={{ width: '100%',mt: 3,border:'2px solid #ff66a3' }}>
              <Section>
                <Title variant="h4" component="div" style={{textAlign:'center'}}>
                  About Us
                </Title>
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Help Her is dedicated to providing a range of services exclusively by women, for women. Our mission is to empower women by offering safe, reliable, and professional services tailored to their unique needs."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Our team comprises trained professionals who are committed to delivering exceptional service with care and empathy. We understand the challenges women face and strive to create a supportive environment where women can access the services they need with confidence."
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Whether you need a safe ride, a comfortable place to stay, or professional counseling, Help Her is here to support you every step of the way. Join our community and experience the difference of services designed with women in mind."
                    />
                  </ListItem>
                </List>
              </Section>
            </Container>
          </Element>

          <Element name="reviews">
            <Container maxWidth="lg" sx={{border:'2px dashed #ff66a3',mt:10}}>
              <Section>
                <Title variant="h4" component="div" style={{textAlign:'center'}}>
                  Reviews
                </Title>
                <ReviewSection>
                  <ReviewCard>
                    <ReviewHeader>
                      <ReviewName>Varshini</ReviewName>
                    </ReviewHeader>
                      <ReviewRating>★★★★★</ReviewRating>
                    <ReviewDescription>Excellent service! Highly recommend.</ReviewDescription>
                  </ReviewCard>
                  <ReviewCard>
                    <ReviewHeader>
                      <ReviewName>Hema</ReviewName>
                    </ReviewHeader>
                      <ReviewRating>★★★★☆</ReviewRating>
                    <ReviewDescription>Great experience, will use again.</ReviewDescription>
                  </ReviewCard>
                  <ReviewCard>
                    <ReviewHeader>
                      <ReviewName>Priya</ReviewName>
                    </ReviewHeader>
                      <ReviewRating>★★★★☆</ReviewRating>
                    <ReviewDescription>Great experience, will use again.</ReviewDescription>
                  </ReviewCard>
                </ReviewSection>
              </Section>
            </Container>
          </Element>
        </Box>
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
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container'; // Import Container
import Grid from '@mui/material/Grid'; // Import Grid
import './Navbar.css';
import { Element, ScrollLink } from 'react-scroll'; 
import { FaBicycle, FaBed, FaDumbbell, FaBrain, FaShieldAlt, FaStethoscope, FaCar } from 'react-icons/fa';

// Styled Components
const drawerWidth = 240;
const navItems = [
  { text: 'Home', path: '' },
  { text: 'Features', path: '' },
  { text: 'About Us', path: '' },
  { text: 'Login', path: '/login' },
];


const ContentBox = styled(Box)`
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  background: #fff;
`;

const Section = styled(Box)`
  margin-bottom: 2rem;
  text-align: center;
`;

const Title = styled(Typography)`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: black;
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
`;

const AboutUsSection = styled(Box)`
  background: linear-gradient(to right, #ffdee9, #ffb7b2);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
`;

const AboutUsTitle = styled(Typography)`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutUsContent = styled(Typography)`
  font-size: 1rem;
  color: #333;
`;

const ReviewSection = styled(Box)`
  background: #ffaaad;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
  text-align: left;
`;

const ReviewCard = styled(Box)`
  background: #ffcccc;
  padding: 1rem;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const ReviewHeader = styled(Box)`
  margin-bottom: 0.5rem;
`;

const ReviewName = styled(Typography)`
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ReviewRating = styled(Typography)`
  color: #f06292;
  margin-bottom: 0.5rem;
`;

const ReviewDescription = styled(Typography)``;

const ServicesSection = styled(Box)`
  padding: 2rem;
  border: 3px solid pink;
  background: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
`;

const ServicesGrid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const ServiceCard = styled(Box)`
  background: #fff;
  padding: 1rem;
  border-radius: 10px;
  border: 3px solid pink;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceIconBox = styled(Box)`
  font-size: 3rem;
  color: #f06292;
  margin-bottom: 1rem;
`;

const ServiceTitle = styled(Typography)`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled(Typography)``;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="app-bar">
      <Typography variant="h6" sx={{ my: 2 }}>
        Help Her
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={ScrollLink} to={item.path} smooth={true} duration={500}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className="navbar-image">
        <CssBaseline />
        <AppBar component="nav" className="app-bar">
          <Toolbar className="app-bar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Help Her
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.text} sx={{ color: '#fff' }} component={Link} to={item.path}>
                  {item.text}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, 
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <Box 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '5%', 
              transform: 'translateY(-50%)', 
              textAlign: 'center'
            }}
          >
            <Typography variant="h2" component="div" sx={{fontSize:'75px',padding:'10px'}}>
              Help Her
            </Typography>
            <Typography variant="h4" component="div">
              A Real-Time Female Support Network
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              {/* <Button sx={{ 
                backgroundColor: 'white', 
                color: '#f06292', 
                padding: "10px", 
                fontSize: '20px', 
                borderRadius: '100px', 
                margin: '10px', 
                '&:hover': { 
                  backgroundColor: 'white' 
                } 
              }}>
                Ask Help
              </Button>
              <Button sx={{ 
                backgroundColor: 'red', 
                color: 'white', 
                padding: "10px", 
                fontSize: '20px', 
                borderRadius: '100px',
                '&:hover': { 
                  backgroundColor: 'red' 
                }
              }}>
                Emergency
              </Button> */}
          <Button component={RouterLink} to="/login" variant="contained" endIcon={<SendIcon />} size="large" style={{
            backdropFilter: 'blur(10px)',
            background: 'white',
            color: 'black',
            borderRadius:"30px",
            padding:'20px'
          }}>
            Ask Help
          </Button>
          <Button
            variant="contained" component={RouterLink} to="/sos"
            color="error"
            style={{
              backgroundColor: 'red',
              color: 'white',
              marginLeft: '10px',
              padding: '20px',
              borderRadius:"30px",
            }}
          >
            Emergency
          </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box sx={{ padding: '20px', textAlign: 'center' }}>
        {/* Services Section */}
        <Element name="services">

        <ServicesSection>
          <Typography variant="h3" component="h1" gutterBottom>
            Features
          </Typography>
          <ServicesGrid>
            <ServiceCard>
              <ServiceIconBox>
                <FaBicycle />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Female Bike Taxi</ServiceTitle>
              <ServiceDescription variant="body1">
                Safe and reliable transportation for women by female drivers.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIconBox>
                <FaBed />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Comfortable Room Bookings</ServiceTitle>
              <ServiceDescription variant="body1">
                Secure and comfortable room booking options for women.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIconBox>
                <FaCar />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Pick & Drop Services</ServiceTitle>
              <ServiceDescription variant="body1">
                Convenient and secure pick and drop services.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIconBox>
                <FaBrain />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Mental Health Counseling</ServiceTitle>
              <ServiceDescription variant="body1">
                Professional support for mental health and well-being.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIconBox>
                <FaShieldAlt />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Cyber Crime Reporting</ServiceTitle>
              <ServiceDescription variant="body1">
                Secure platform for women to report cyber crimes.
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard>
              <ServiceIconBox>
                <FaStethoscope />
              </ServiceIconBox>
              <ServiceTitle variant="h6">Gynecologist Consultations</ServiceTitle>
              <ServiceDescription variant="body1">
                Access to professional gynecological care.
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>
        </Element>

        {/* About Us Section */}
        {/* <AboutUsSection>
          <AboutUsTitle variant="h3">About Us</AboutUsTitle>
          <AboutUsContent variant="body1">
            At Help Her, we are dedicated to providing a safe and supportive environment for women. Our services include female bike taxis, comfortable room bookings, pick and drop services, mental health counseling, cyber crime reporting, and gynecologist consultations. We aim to empower women by offering reliable and accessible support whenever they need it.
          </AboutUsContent>
        </AboutUsSection> */}

<AboutUsSection>
  <AboutUsTitle variant="h3">About Us</AboutUsTitle>
  <AboutUsContent variant="body1" >
    At Help Her, we are dedicated to providing a safe and supportive environment for women. Our services include:
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li><strong>Female Bike Taxi:</strong> Safe and reliable transportation for women by female drivers.</li>
      <li><strong>Comfortable Room Bookings:</strong> Secure and comfortable room booking options for women.</li>
      <li><strong>Pick & Drop Services:</strong> Convenient and secure pick and drop services.</li>
      <li><strong>Mental Health Counseling:</strong> Professional support for mental health and well-being.</li>
      <li><strong>Cyber Crime Reporting:</strong> Secure platform for women to report cyber crimes.</li>
      <li><strong>Gynecologist Consultations:</strong> Access to professional gynecological care.</li>
    </ul>
    We aim to empower women by offering reliable and accessible support whenever they need it.
  </AboutUsContent>
</AboutUsSection>


        {/* Reviews Section */}
        <ReviewSection>
          <Typography variant="h3" component="h1" gutterBottom>
            Reviews
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <ReviewCard>
              <ReviewHeader>
                <ReviewName variant="h6">Varshini</ReviewName>
                <ReviewRating variant="body1">★★★★★</ReviewRating>
              </ReviewHeader>
              <ReviewDescription variant="body1">
                The services provided by Help Her are top-notch! The female bike taxi was a lifesaver during my late-night emergency. Highly recommend!
              </ReviewDescription>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewName variant="h6">Abinaya</ReviewName>
                <ReviewRating variant="body1">★★★★☆</ReviewRating>
              </ReviewHeader>
              <ReviewDescription variant="body1">
                Comfortable room bookings and excellent support. The only improvement would be to offer more flexible booking options.
              </ReviewDescription>
            </ReviewCard>
            <ReviewCard>
              <ReviewHeader>
                <ReviewName variant="h6">Sowmiya</ReviewName>
                <ReviewRating variant="body1">★★★★★</ReviewRating>
              </ReviewHeader>
              <ReviewDescription variant="body1">
                Amazing fitness services and mental health counseling. The support team is incredibly caring and professional.
              </ReviewDescription>
            </ReviewCard>
          </Box>
        </ReviewSection>
        <footer>
  <Box sx={{ backgroundColor: '#f8f8f8', padding: '20px 0', marginTop: '40px' }}>
    <Container>
      <Grid container spacing={4} justifyContent="center" textAlign="center">
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            HELP HER
          </Typography>
          <Typography variant="body2">
            Dedicated to providing real-time support for women in need.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box>
            <Link href="https://facebook.com" color="inherit" underline="none">
              <FacebookIcon sx={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://twitter.com" color="inherit" underline="none">
              <TwitterIcon sx={{ marginRight: '10px' }} />
            </Link>
            <Link href="https://instagram.com" color="inherit" underline="none">
              <InstagramIcon sx={{ marginRight: '10px' }} />
            </Link>
            
          </Box>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          &copy; 2024 HELP HER. All rights reserved.
        </Typography>
      </Box>
    </Container>
  </Box>
</footer>

      </Box>
    </>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;

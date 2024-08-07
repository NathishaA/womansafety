import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import Nav from './Nav';

// Card data for services
const cardData = [
  { title: 'Bike Ride', image: 'https://cdn-icons-png.flaticon.com/128/7695/7695161.png', path: '/bike-ride' },
  { title: 'Rooms', image: 'https://cdn-icons-png.flaticon.com/128/3030/3030336.png', path: '/rooms' },
  { title: 'Pick Up', image: 'https://cdn-icons-png.flaticon.com/128/13467/13467122.png', path: '/food-delivery' },
  { title: 'Cyber Crime', image: 'https://cdn-icons-png.flaticon.com/128/5643/5643496.png', path: '/cyber-crime' },
  { title: 'Counselling', image: 'https://cdn-icons-png.flaticon.com/128/141/141918.png', path: '/mental-counselling' },
  { title: 'Menstruals', image: 'https://cdn-icons-png.flaticon.com/128/11426/11426772.png', path: '/menstruals' },
  { title: 'Pregnancy', image: 'https://cdn-icons-png.flaticon.com/128/14373/14373354.png', path: '/pregnancy' },
  { title: 'Fitness', image: 'https://cdn-icons-png.flaticon.com/128/5357/5357292.png', path: '/fitness' },
];

// Styled components for glassmorphism cards
const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '10px',
  border: '5px solid pink',
  color: 'black',
  overflow: 'hidden',
  width: 150,
  height: 150,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: theme?.shadows ? theme.shadows[5] : '0px 10px 20px rgba(0, 0, 0, 0.15)',
  },
}));

const GlassCardMedia = styled(CardMedia)({
  height: 80,
  width: 80,
  margin: '0 auto',
  objectFit: 'contain',
});

const GlassCardContent = styled(CardContent)({
  textAlign: 'center',
  padding: 0,
});

// Services component
function Services() {
  return (
    <>
      <Box 
        sx={{ 
          backgroundImage: 'url("https://img.freepik.com/free-photo/tourism-lifestyle-concept-beautiful-asian-woman-showing-her-clean-cute-face-wearing-sunglasses-s_1258-161956.jpg?t=st=1722315145~exp=1722318745~hmac=08a850cd515f17c82644eba6dca5dab7d0b79e62e2004d3f13c4879114dd0470&w=1380")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',          
          height: '90vh', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ 
          display: "flex",
          flexDirection: 'column',
          alignItems: 'flex-end',
          maxWidth: '50%',
          textAlign: 'right',
          padding: 2,
          marginLeft:'500px',          
          borderRadius: 1,
        }}>
          <Typography variant="h3" component="div" sx={{ color: 'black', mb: 2 }}>
            Our Services
          </Typography>
          <Typography variant="h5">
            The main motive of our HelpHer network is to provide napkins to women during critical period situations.
          </Typography>
        </Box>
      </Box>
      
      <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor:"pink" }}>
        <Container sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h3" component="div" sx={{ color: 'black', mb: 4 }}>
            Our Services
          </Typography>
        </Container>
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 1200 }}>
          {cardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link to={card.path} style={{ textDecoration: 'none' }}>
                <GlassCard>
                  <GlassCardMedia
                    component="img"
                    image={card.image}
                    alt={card.title}
                  />
                  <GlassCardContent>
                    <Typography variant="h6" component="div" noWrap>
                      {card.title}
                    </Typography>
                  </GlassCardContent>
                </GlassCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Services;

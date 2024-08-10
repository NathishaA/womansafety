import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';


const fadeInAnimation = keyframes`${fadeIn}`;

const AboutUsContainer = styled(Box)`
  background-color: pink;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: 2s ${fadeInAnimation};
`;

const ContentBox = styled(Box)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
`;

const Section = styled(Box)`
  margin-bottom: 1.5rem;
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Container maxWidth="md">
        <ContentBox>
          <Typography variant="h3" component="h1" gutterBottom>
            About Us
          </Typography>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              At Help Her, we are dedicated to providing essential services exclusively for women, ensuring safety, comfort, and convenience. Our mission is to empower women by offering a range of services that cater to their unique needs and help them lead a better life.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Midnight Napkin Delivery
            </Typography>
            <Typography variant="body1">
              We understand the importance of timely assistance, especially during emergencies. Our service ensures that women can receive sanitary napkins at any time of the night, providing peace of mind and support when they need it the most.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Female Bike Taxi
            </Typography>
            <Typography variant="body1">
              Our female bike taxi service is designed to offer a safe and reliable transportation option for women. Whether you need a ride to work, a friend's place, or anywhere else, our female drivers are here to get you to your destination safely.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Comfortable Room Bookings
            </Typography>
            <Typography variant="body1">
              We offer a variety of room booking options to suit your needs, ensuring a comfortable and secure stay. Whether you're traveling for business or leisure, our rooms are designed to provide a relaxing and safe environment.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Fitness and Wellness
            </Typography>
            <Typography variant="body1">
              Our fitness services are tailored to help women achieve their health and wellness goals. From personal training to group classes, we offer a range of options to keep you fit and healthy.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Mental Health Counseling
            </Typography>
            <Typography variant="body1">
              Mental health is a crucial aspect of overall well-being. Our counseling services provide professional support to help you navigate life's challenges, offering a safe space to talk and receive guidance.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Cyber Crime Reporting
            </Typography>
            <Typography variant="body1">
              We offer a secure platform for women to report cyber crimes. Our team is committed to helping you take the necessary steps to address and resolve any online threats or harassment you may encounter.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Gynecologist Consultations
            </Typography>
            <Typography variant="body1">
              Access to professional gynecological care is essential for every woman. We provide consultations with experienced gynecologists to address your health concerns and ensure your well-being.
            </Typography>
          </Section>
          <Section>
            <Typography variant="h5" component="h2" gutterBottom>
              Pick & Drop Services
            </Typography>
            <Typography variant="body1">
              Our pick and drop services are designed to offer convenience and safety. Whether you need a ride to an appointment or a safe return home, our reliable service is here to assist you.
            </Typography>
          </Section>
        </ContentBox>
      </Container>
    </AboutUsContainer>
  );
};

export default AboutUs;

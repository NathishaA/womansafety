import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Nav from './Nav';

const Container = styled.div`
  background-image: url('https://img.freepik.com/free-photo/stethoscope-pink-background_23-2147691462.jpg?t=st=1722139745~exp=1722143345~hmac=a28fe16191683965488072ebc5ba019bf5546dc704d71336aab4edd25a64465a&w=740'); // Replace with your actual background image URL
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding: 50px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 3em;
  color: white;
  position: relative;
`;

const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

const TypingEffect = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid white;
  animation: ${typing} 3.5s steps(30, end), ${blink} 0.75s step-end infinite;
  width: 100%;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 300px;
  margin: 10px;
`;

const DoctorImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const DoctorInfo = styled.div`
  padding: 20px;
`;

const DoctorName = styled.h2`
  font-size: 1.5em;
  margin: 0.5em 0;
`;

const DoctorDesignation = styled.h4`
  font-size: 1em;
  color: gray;
`;

const BookingButton = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 1em;
  margin-top: 20px;
  padding: 10px 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const DoctorCard = () => {
  const doctors = [
    {
      image: 'https://img.freepik.com/free-photo/young-woman-doctor-white-coat-with-phonendoscope-looking-confident-standing-with-crossed-arms-blue-isolated-background_141793-9779.jpg?w=740&t=st=1722138963~exp=1722139563~hmac=44b28e12f588787fa836cb0f1ce5c839bc66c3bd059afbac3fc417d0ddb51eff',
      name: 'Dr. Lia',
      designation: 'Gynecologist',
      route: '/booking',
    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-smiley-doctor-holding-clipboard_23-2149355014.jpg?t=st=1722138998~exp=1722142598~hmac=7654083ce0865ee57fa9c06e334432ba49fa2288defe962d18675400a1bfd3df&w=740',
      name: 'Dr. Gayathri',
      designation: 'Gynecologist',
      route: '/booking',
    },
    {
      image: 'https://img.freepik.com/free-photo/medium-shot-smiley-doctor-work_23-2149726937.jpg?t=st=1722139073~exp=1722142673~hmac=3383256f035531526cce7ecb5b3204b69e8de2c25bb87973346f9b077ebd4946&w=360',
      name: 'Dr. Vimala',
      designation: 'Gynecologist',
      route: '/booking',
    },
    {
      image: 'https://img.freepik.com/premium-photo/indian-female-doctor-white-coat-with-stethoscope-smiling_875825-181091.jpg?w=740',
      name: 'Dr. Dhivya',
      designation: 'Gynecologist',
      route: '/booking',
    },
  ];

  return (
    <Container>
      <Nav/>
      <TitleContainer>
        <Title>
          <TypingEffect>Our Specialists</TypingEffect>
        </Title>
      </TitleContainer>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {doctors.map((doctor, index) => (
          <Card key={index}>
            <DoctorImage src={doctor.image} alt={doctor.name} />
            <DoctorInfo>
              <DoctorName>{doctor.name}</DoctorName>
              <DoctorDesignation>{doctor.designation}</DoctorDesignation>
              <BookingButton to={doctor.route}>Booking</BookingButton>
            </DoctorInfo>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default DoctorCard;

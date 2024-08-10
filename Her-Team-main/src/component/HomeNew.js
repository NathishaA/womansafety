import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-scroll';
import { Margin } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { ReactTyped } from 'react-typed';

// Register Chart.js components
// ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

// Styled components
const Navbar = styled.nav`
  background-color: #ff66a3;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 16px;
  background-color: #fff;
  margin-top: 60px;
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  color: white;
  padding: 15px 20px;
  text-decoration: none;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: white;
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavBrand = styled.div`
  padding: 15px 20px;
  font-size: 1.5em;
`;

const Button = styled.a`
  color: white;
  padding: 10px 20px;
  margin-left: 10px;
  text-decoration: none;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  transition: background-color 0.3s;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ bgColor }) => bgColor};
    transition: width 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }

  &:hover::after {
    width: 100%;
  }
`;

const neonTextEffect = `
  text-shadow: 0 0 5px rgba(255, 102, 163, 0.8), 
               0 0 10px rgba(255, 102, 163, 0.8),
               0 0 15px rgba(255, 102, 163, 0.8),
               0 0 20px rgba(255, 102, 163, 0.8);
`;

const neonBorderEffect = `
  box-shadow: 0 0 5px rgba(255, 102, 163, 0.8),
              0 0 5px rgba(255, 102, 163, 0.8),
              0 0 5px rgba(255, 102, 163, 0.8),
              0 0 5px rgba(255, 102, 163, 0.8);
`;

const SignupButton = styled(Button)`
  background-color: #ff66a3;
  color: white;
  border-radius: 100px;
  
  &:hover {
    background-color: #ffccdf;
  }
`;

const LoginButton = styled(Button)`
  background-color: #ff66a3;
  color: white;
  border-radius: 20px;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  position: relative;
  margin-left: 100px;
  font-size: 30px;
  margin-top: 30px; /* Adjusted for fixed navbar */
  color: black;
  padding: 0 20px;
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 50%;
  text-align: left;
`;

const HeroImage = styled.div`
  flex: 1;
  max-width: 50%;
  background: url('https://img.freepik.com/free-vector/female-working-it-domain_23-2148281537.jpg?t=st=1722666322~exp=1722669922~hmac=99c2858f23c7a3ebfe7c3a7eca357255eb6ec3a1ba2b39c687af8f015bf4b202&w=740') no-repeat center center/cover;
  height: 100%;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  width: ${({ slidesToShow, itemWidth }) => `${slidesToShow * itemWidth}px`};
`;

const CarouselItem = styled.div`
  flex: 0 0 ${({ itemWidth }) => `${itemWidth}px`};
  box-sizing: border-box;
  padding: 0 5px; /* Adjusted padding */
`;

const Carousel = ({ children, slidesToShow = 2 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const itemWidth = 280; // Adjust to match ServiceCard width
    const intervalTime = 2000; // Interval time in milliseconds
    const carouselRef = useRef(null);

    // Duplicate slides for seamless infinite loop
    const slides = React.Children.toArray(children);
    const duplicatedSlides = [
        ...slides,
        ...slides,
        ...slides, // Duplicate slides for smoother transition
    ];

    const totalSlides = duplicatedSlides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => {
                const nextSlide = (prev + 1) % slides.length; // Loop through slides
                if (nextSlide === 0) {
                    // Reset position to start smoothly after the last slide
                    setTimeout(() => {
                        carouselRef.current.style.transition = 'none';
                        carouselRef.current.style.transform = `translateX(0px)`;
                    }, intervalTime);
                }
                return nextSlide;
            });
        }, intervalTime);

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [intervalTime, slides.length]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
            carouselRef.current.style.transform = `translateX(-${currentSlide * itemWidth}px)`;
        }
    }, [currentSlide, itemWidth]);

    return (
        <CarouselContainer >
            <CarouselWrapper ref={carouselRef} slidesToShow={slidesToShow} itemWidth={itemWidth} style={{margin:'20px'}}>
                {duplicatedSlides.map((child, index) => (
                    <CarouselItem key={index} itemWidth={itemWidth}>
                        {child}
                    </CarouselItem>
                ))}
            </CarouselWrapper>
        </CarouselContainer>
    );
};
  

const ServicesSection = styled.section`
  padding: 60px 20px;
  background-color: #ffcccc;
  text-align: center;
  margin: 20px;
  border: 2px dashed #ff66a3; /* Pink dashed border */
`;

const ServiceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ff66a3;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, ${neonBorderEffect}; /* Added neon border effect */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 350px; /* Fixed height for uniformity */
  box-sizing: border-box;

  &:hover {
    transform: scale(1.05);
    ${neonBorderEffect}; /* Add neon border effect on hover */
  }

  img {
    width: 100%;
    height: 150px; /* Fixed height for images */
    object-fit: cover; /* Ensures the image covers the container */
    border-radius: 10px;
  }

  h3 {
    margin: 10px 0;
    ${neonTextEffect}; /* Added neon text effect */
  }

  p {
    text-align: center;
  }
`;

const GraphSection = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const ReviewSection = styled.section`
  padding: 60px 20px;
  background-color: #ffcccc;
  text-align: center;
  
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, ${neonBorderEffect}; /* Added neon border effect */
  display: inline-block;
  width: 280px;
  text-align: left;

  &:hover {
    transform: scale(1.05);
    ${neonBorderEffect}; /* Add neon border effect on hover */
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
    display: inline-block;
    vertical-align: middle;
  }

  .review-content {
    display: inline-block;
    vertical-align: middle;
    max-width: calc(100% - 70px); /* Adjust based on avatar size */
  }

  .rating {
    font-size: 1.2em;
    color: #ffcc00; /* Gold color for the rating stars */
    margin: 5px 0;
  }

  h4 {
    margin: 10px 0;
    ${neonTextEffect}; /* Added neon text effect */
  }
`;

const AboutSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  margin: 20px;
  border: 2px dashed #ff66a3; /* Pink dashed border */
  h2 {
    margin-bottom: 20px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    li {
      margin: 10px 0;
    }
  }
`;


const ContactSection = styled.section`
  padding: 60px 20px;
  background-color: #f7f7f7;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    input, textarea {
      width: 100%;
      max-width: 400px;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      background-color: #ff66a3;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #ffccdf;
      }
    }
  }

  div {
    margin-top: 20px;

    a {
      color: #ff66a3;
      text-decoration: none;
      margin: 0 10px;
      font-size: 1.2em;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const EmergencyButton = styled(Button)`
  background-color: #ff4d4d; /* Red color */
  color: white;
  font-size:25px;
  border-radius: 100px; /* Adjust radius as needed */

  &:hover {
    background-color: #ff9999; /* Lighter red on hover */
  }
`;


const Footer = styled.footer`
  padding: 20px;
  background-color: #ff66a3;
  color: white;
  text-align: center;
`;

const data = [
  { name: 'Jan', Users: 400 },
  { name: 'Feb', Users: 300 },
  { name: 'Mar', Users: 200 },
  { name: 'Apr', Users: 278 },
  { name: 'May', Users: 189 },
  { name: 'Jun', Users: 239 },
  { name: 'Jul', Users: 349 },
  { name: 'Aug', Users: 200 },
  { name: 'Sep', Users: 278 },
  { name: 'Oct', Users: 189 },
  { name: 'Nov', Users: 239 },
  { name: 'Dec', Users: 349 },
];


const HomeNew = () => {
  const chartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Weekly Usage',
        data: [65, 59, 80, 81],
        borderColor: '#ff66a3',
        backgroundColor: 'rgba(255, 102, 163, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Navbar>
        <NavBrand>HelpHer</NavBrand>
        <NavItems>
          <NavItem to="home" smooth={true} duration={500}>Home</NavItem>
          <NavItem to="services" smooth={true} duration={500}>Services</NavItem>
          <NavItem to="about" smooth={true} duration={500}>About</NavItem>
          <NavItem to="contact" smooth={true} duration={500}>Contact</NavItem>
          <SignupButton href="/signup" bgColor="#ff66a3">Sign Up</SignupButton>
          <LoginButton href="/login" bgColor="#ff66a3">Log In</LoginButton>
        </NavItems>
      </Navbar>
      <HeroSection id="home">
        <HeroText>
          {/* <h1>Welcome to HelpHer</h1> */}
          <Typography style={{ fontSize: '60px' }} component="span">
      <ReactTyped
        strings={[
          `Welcome to Help<span style="color:#ff66a3;">Her</span>`
        ]}
        typeSpeed={150}
        backSpeed={50}
        loop={false}
      />
    </Typography>
          <p>Your one-stop solution for female-centric services.</p>
          <div>
            <SignupButton href="/signup" style={{fontSize:'25px'}}>Get Started</SignupButton>
            <EmergencyButton href="/emergency">Emergency</EmergencyButton>
          </div>
        </HeroText>
        <HeroImage />
      </HeroSection>
      <ServicesSection id="services">
  <h1 style={{fontSize:'40px'}}>Our Services</h1>
  <Carousel slidesToShow={1.5}>
    <ServiceCard>
      <img src="https://img.freepik.com/premium-vector/woman-with-pain-stomach-semi-flat-color-vector-character_151150-11089.jpg?w=740" alt="Napkin Delivery" />
      <h3>Napkin Delivery</h3>
      <p>Reliable and timely napkin delivery service, designed specifically for women&apos;s needs.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/free-vector/women-ride_1284-18660.jpg?t=st=1722670794~exp=1722674394~hmac=1a7550143b1052f53f2633f113dd1a661ee76d83e3e2dc40909ad58bc257e24b&w=740" alt="Female Bike Ride" />
      <h3>Female Bike Ride</h3>
      <p>Safe and secure bike rides conducted by female drivers for a comfortable journey.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/free-vector/safe-food-delivery-concept_23-2148567976.jpg?t=st=1722670724~exp=1722674324~hmac=1cd778b35e132c9af147cc56fd2698acf6b6266c30250b8445aac70e0c7ae552&w=740" alt="Pick and Drop" />
      <h3>Pick and Drop</h3>
      <p>Convenient pick-up and drop-off service for various destinations.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/premium-vector/woman-reading-bed-bedtime-leisure-color-illustration-isolated-white-background_81894-12503.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Room Booking" />
      <h3>Room Booking</h3>
      <p>Easy and quick room booking service for safe and secure accommodations.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/free-vector/flat-childbirth-scenes-collection_23-2149213582.jpg?t=st=1722671126~exp=1722674726~hmac=734afa3db8e7bb4dfdad62f37e22cfc4d383a40b92c584255e0fda1b5de13475&w=740" alt="Gynecologist Consultations" />
      <h3>Gynecologist Consultations</h3>
      <p>Professional consultations with experienced gynecologists for all health concerns.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/premium-vector/people-working-concept-illustration_958800-111462.jpg?w=740" alt="Mental Counseling" />
      <h3>Mental Counseling</h3>
      <p>Confidential mental health counseling sessions with qualified professionals.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/free-vector/full-energy-tired-exhausted-woman-office-worker_88138-800.jpg?t=st=1722671204~exp=1722674804~hmac=6059667fe636438c77f585a5a9179cba3a64734c1778acac8032e6313fc5dfb8&w=740" alt="Cyber Crime Reporting" />
      <h3>Cyber Crime Reporting</h3>
      <p>Efficient reporting and support for any cybercrime incidents you might face.</p>
    </ServiceCard>
    <ServiceCard>
      <img src="https://img.freepik.com/free-vector/training-home-concept-with-weights_23-2148487929.jpg?t=st=1722671303~exp=1722674903~hmac=ff705731f0a05ba33f0c4f8ab2c69865927f04f56d3f23831d506d11b5f14fd1&w=740" alt="Fitness Services" />
      <h3>Fitness Services</h3>
      <p>Personalized fitness programs and sessions to help you stay healthy and fit.</p>
    </ServiceCard>
  </Carousel>
</ServicesSection>


      {/* <GraphSection>
        <h2>Usage Statistics</h2>
        <Line data={chartData} />
      </GraphSection> */}

<InfoSection id="chart">
          {/* <TextSection> */}
            
            {/* <Typography variant="body1" style={{ marginTop: '16px', fontSize: '25px' }}>
              Here is the bar chart showing the monthly user statistics for HelpHer.
            </Typography> */}
          {/* </TextSection> */}
            <Typography variant="h2" component="h2" gutterBottom>
              Monthly User Statistics
            </Typography>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Users" fill="#ff66a3" />
            </BarChart>
          </ResponsiveContainer>
        </InfoSection>

      <ReviewSection>
        <h2>What Our Users Say</h2>
        <Carousel slidesToShow={2}>
          <ReviewCard>
            <img className="avatar" src="https://img.freepik.com/free-photo/celebration-deity-navratri_23-2151220075.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Reviewer 1" />
            <div className="review-content">
              <h4>Suba P</h4>
              <div className="rating">★★★★★</div>
              <p>"This is a great service!"</p>
            </div>
          </ReviewCard>
          <ReviewCard>
            <img className="avatar" src="https://img.freepik.com/free-photo/portrait-young-model-plaid-shirt-posing-near-lamps_114579-81029.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Reviewer 2" />
            <div className="review-content">
              <h4>Priya K</h4>
              <div className="rating">★★★★☆</div>
              <p>"I love using HelpHer!"</p>
            </div>
          </ReviewCard>
          <ReviewCard>
            <img className="avatar" src="https://img.freepik.com/free-photo/happy-work-nude-sunbathing-nature-day_1303-3061.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Reviewer 3" />
            <div className="review-content">
              <h4>Manosri G</h4>
              <div className="rating">★★★★★</div>
              <p>"Highly recommend it!"</p>
            </div>
          </ReviewCard>
          <ReviewCard>
            <img className="avatar" src="https://img.freepik.com/premium-photo/pretty-young-stylish-female-posing-outdoors_662214-302234.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Reviewer 4" />
            <div className="review-content">
              <h4>HariPriya A</h4>
              <div className="rating">★★★★☆</div>
              <p>"Fantastic experience!"</p>
            </div>
          </ReviewCard>
          <ReviewCard>
            <img className="avatar" src="https://img.freepik.com/premium-photo/asian-girl-curely-black-hair-ai-generated-images_784842-2565.jpg?ga=GA1.1.1628848752.1721882282&semt=ais_hybrid" alt="Reviewer 5" />
            <div className="review-content">
              <h4>Indhu Abinaya</h4>
              <div className="rating">★★★★★</div>
              <p>"Very satisfied with the service."</p>
            </div>
          </ReviewCard>
        </Carousel>
      </ReviewSection>
      
      <AboutSection id="about">
    <h1>About Us</h1>
    <p>
      HelpHer is a real-life female support network dedicated to providing high-quality services for women. Our main features include:
    </p>
    <ul>
      <li>Delivering sanitary napkins to your location</li>
      <li>Female bike rides</li>
      <li>Room booking</li>
      <li>Pick and drop services</li>
      <li>Cyber crime reporting</li>
      <li>Gynecologist consultations</li>
      <li>Mental counseling</li>
      <li>Fitness services</li>
    </ul>
    <p>We ensure safety, reliability, and convenience in every aspect.</p>
  </AboutSection>

  <div style={{backgroundColor:'red',color:'white',textAlign:'center',padding:'10px'}}>
    <h1 style={{textAlign:'center'}}>Disclaimer</h1>
    <p style={{fontSize:'20px'}}>Misusing of the service provided by HelpHer will leads to file complaint on the person under THE PROTECTION OF WOMEN FROM DOMESTIC VIOLENCE ACT, 2005(NO. 43, 2005) </p>

  </div>

      <ContactSection id="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </ContactSection>
      <Footer>
        <p>&copy; 2024 HelpHer. All rights reserved.</p>
      </Footer>
    </div>
  );
};

export default HomeNew;
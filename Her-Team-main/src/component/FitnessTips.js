import React from 'react';
import { Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import {ReactTyped} from 'react-typed';
import styled from 'styled-components';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const tips = [
  {
    image: 'https://img.freepik.com/free-photo/woman-drinking-water-after-exercise_23-2149240213.jpg?t=st=1722140829~exp=1722144429~hmac=7ee5033a29228e0dcd8fb539078501fc4e950384117230810b1d3a724faf7a92&w=740',
    description: 'Tip 1: Drink water before, during, and after workouts to stay hydrated.',
  },
  {
    image: 'https://img.freepik.com/free-photo/side-view-young-woman-doing-leg-press-exercise_23-2147827512.jpg?t=st=1722140855~exp=1722144455~hmac=67c9e8e05e06f2c0d4db142a655b323b528c3d401566895bcbaed72a20a01e02&w=740',
    description: 'Tip 2: Mix up your workouts with both cardio and strength training exercises.',
  },
  {
    image: 'https://img.freepik.com/free-photo/blonde-woman-doing-yoga-beach_23-2148739089.jpg?t=st=1722140883~exp=1722144483~hmac=b0d5a8ba1a549a15d1eedf73d4bf9f92073e89ccc5719113528114ae73c8d4d0&w=740',
    description: 'Tip 3: Take time to meditate daily to improve mental clarity and reduce stress.',
  },
  {
    image: 'https://img.freepik.com/free-photo/woman-eating-lettuce-salad_23-2148173298.jpg?t=st=1722140957~exp=1722144557~hmac=0bb73fa05b3691450e23f1baca19f9fcbb96d355dea5aa5d4ba0be8706ad67e4&w=360',
    description: 'Tip 4: Maintain a balanced diet with a variety of nutrients from all food groups.',
  },
  {
    image: 'https://img.freepik.com/free-photo/young-happy-sportswoman-running-road-morning-copy-space_637285-3758.jpg?t=st=1722141004~exp=1722144604~hmac=be2ca6798ae52f98c15440a6e8d7e69751e0b22946ce83b4c107de5385239af0&w=740',
    description: 'Tip 5: Start your day with a morning run or walk to boost your metabolism.',
  },
  {
    image: 'https://t4.ftcdn.net/jpg/04/27/89/33/240_F_427893301_xtXnK0FtbJrgmIZlKuZzV6zIETUlZD9M.jpg',
    description: 'Tip 6: Practice yoga regularly to increase flexibility and muscle tone.',
  },
  {
    image: 'https://img.freepik.com/free-photo/smiling-young-woman-eating-healthy-fruit-salad_23-2147855447.jpg?t=st=1722143470~exp=1722147070~hmac=84a52892babb2643bba74afcea04f4fc63057c8673f51eb11d6d816296a9e286&w=740',
    description: 'Tip 7: Eat fresh fruits and vegetables to keep your body fueled with vitamins and minerals.',
  },
  {
    image: 'https://img.freepik.com/free-photo/young-woman-sleeping-beautiful-young-smiling-woman-sleeping-bed_231208-448.jpg?t=st=1722143503~exp=1722147103~hmac=f79a31e544d3d189a956e0742bacf2dc867873ad945cd00f3f3d62288de8d079&w=740',
    description: 'Tip 8: Ensure you get 7-9 hours of quality sleep every night for optimal health.',
  },
];

const FitnessTips = () => {
  return (
    <ThemeProvider theme={theme}>
      
        
      <BackgroundBox>
        <Header>
          <Typography
            sx={{ fontSize: '80px', textAlign: 'center', mb: 3, color: 'black' }}
            component="span"
          >
            <ReactTyped
              strings={['Fitness Tips']}
              typeSpeed={100}
              backSpeed={50}
              loop={false}
            />
          </Typography>
        </Header>
        <Grid container spacing={3} justifyContent="center">
          {tips.map((tip, index) => (
            <Grid item xs={12} md={6} key={index}>
              <TipCard>
                <TipImage src={tip.image} alt={`Tip ${index + 1}`} />
                <TipContent>
                  <Typography variant="body1" color="textPrimary">
                    {tip.description}
                  </Typography>
                </TipContent>
              </TipCard>
            </Grid>
          ))}
        </Grid>
      </BackgroundBox>
    </ThemeProvider>
  );
};

const BackgroundBox = styled(Box)`
  min-height: 100vh;
  padding: 3rem;
  background: url('https://img.freepik.com/free-photo/woman-mat-doing-abdominal-exercise_23-2148435328.jpg?t=st=1722144053~exp=1722147653~hmac=16ba4655acc3e94bf9c65309207e6da67aff300fffdc89f14b2791ce29b26970&w=740');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;

const TipCard = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const TipImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const TipContent = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FitnessTips;

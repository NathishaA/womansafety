import React from 'react';
import { Box, Typography, createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import tick from '../logo/tick.png';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const CyberConfirm = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <img src={tick} height='200px' width='200px' style={{marginBottom:'20px'}} />
        <Typography variant="h3">Case Filed!</Typography>
        <Typography variant="h5">We'll Solve it ASAP</Typography>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
`;

const TickImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  font-size: 2rem;
  color: #1976d2;
`;

export default CyberConfirm;

import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { ReactTyped } from 'react-typed';
import axios from 'axios'; // Import Axios
import Nav from './Nav';

const Delivery = () => {
  const [pickupInputValue, setPickupInputValue] = useState('');
  const [dropInputValue, setDropInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const mockOptions = [
    { label: 'Sri Krishna College of Technology' },
    { label: 'Ayyapan Temple' },
    { label: 'Gandhipuram, Coimbatore, Tamil Nadu' },
  ];

  const navigate = useNavigate(); // Create navigate function

  useEffect(() => {
    setOptions(mockOptions);
  }, []);

  const handlePickupSelect = (event, value) => {
    console.log('Selected pickup location:', value);
  };

  const handleDropSelect = (event, value) => {
    console.log('Selected drop location:', value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8080/delivery', {
        pickupPoint: pickupInputValue,
        dropPoint: dropInputValue,
      });
      console.log(response.data);

      if (response.status === 200) {
        alert('Delivery request created successfully');
        navigate('/MapC'); // Replace '/MapC' with the route you want to navigate to
      }

    } catch (error) {
      console.error('Error creating delivery request:', error);
      alert('Failed to create delivery request. Please try again.');
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/premium-photo/photo-portrait-young-moped-rider-driver-wearing-white-face-mask-isolated-pastel-pink-color-background_274222-38918.jpg?w=740")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Nav />
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: 'url("https://source.unsplash.com/random/800x600?map")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                position: 'relative',
                minHeight: '400px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472888122254!2d76.92319257408951!3d10.927606756388924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b823c4ca3d5%3A0x23416a992879b7c4!2sSri%20Krishna%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1721919285291!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '87%',
                minHeight: '400px',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Box sx={{ width: '100%', maxWidth: 800 }}>
                <Typography style={{ fontSize: '30px', marginBottom: '20px' }} component="span">
                  <ReactTyped
                    strings={['Pick and Drop it']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={false}
                  />
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Autocomplete
                        freeSolo
                        options={options}
                        getOptionLabel={(option) => option.label || ''}
                        inputValue={pickupInputValue}
                        onInputChange={(event, newInputValue) => setPickupInputValue(newInputValue)}
                        onChange={handlePickupSelect}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Enter Pick Up Point"
                            fullWidth
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.8)',
                              borderRadius: 1,
                              '& .MuiInputBase-input': {
                                color: '#000',
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Autocomplete
                        freeSolo
                        options={options}
                        getOptionLabel={(option) => option.label || ''}
                        inputValue={dropInputValue}
                        onInputChange={(event, newInputValue) => setDropInputValue(newInputValue)}
                        onChange={handleDropSelect}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Enter Drop Point"
                            fullWidth
                            sx={{
                              bgcolor: 'rgba(255, 255, 255, 0.8)',
                              borderRadius: 1,
                              '& .MuiInputBase-input': {
                                color: '#000',
                              },
                            }}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ width: '100%', backgroundColor: '#4CAF50' }}
                      onClick={handleSubmit}
                    >
                      Pick My Things
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Delivery;

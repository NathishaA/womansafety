import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';

const Periods = () => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const mockOptions = [
    { label: 'Sri Krishna College of Technology' },
    { label: 'Ayyapan Temple' },
    { label: 'Gandhipuram, Coimbatore, Tamil Nadu' },
  ];

  useEffect(() => {
    // Fetch email from localStorage or sessionStorage
    const storedEmail = localStorage.getItem('username') || sessionStorage.getItem('username');
    if (storedEmail) {
      setEmail(storedEmail);
    }

    setOptions(mockOptions);
  }, []);

  const handleLocation = (event, value) => {
    setSelectedPlace(value ? value.label : '');
    console.log('Selected pickup location:', value);
  };

  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8080/api/locations/getall');
  //       setOptions(response.data.map(location => ({ label: location.name })));
  //     } catch (error) {
  //       console.error('Error fetching locations:', error);
  //     }
  //   };

  //   fetchLocations();
  // }, []);

  // const handlePlaceSelect = (event, value) => {
  //   setInputValue(value ? value.label : '');
  //   setSelectedPlace(value);
  // };

  const handleHelpMeClick = async () => {
    const deliveryRequest = {
      location: selectedPlace,      
      email: email, // Include email in the payload
    };

    console.log("Submitting delivery request: ", deliveryRequest);

    try {
      const response = await axios.post('http://localhost:8080/api/locations/add', deliveryRequest);

      console.log(response.data);

      if (response.status === 200) {
        alert('Delivery request created successfully');
        navigate('/MapC'); // Replace '/MapC' with the route you want to navigate to
      }

    } catch (error) {
      console.error('Error creating delivery request:', error);
      alert('Failed to create delivery request. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-photo/woman-wearing-casual-sweater-background-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_343596-4031.jpg?t=st=1722143932~exp=1722147532~hmac=a3d7fc961cb7d878b362bdc6a5a70492227bd2572279c38e82166f8129b9b883&w=740")',
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

          <Grid item xs={12} md={6} mt={10}>
            <Paper
              elevation={3}
              sx={{
                p: 8,
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
                  Lady Time
                </Typography>
                <Box component="form" noValidate autoComplete="off">
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Autocomplete
                        freeSolo
                        options={mockOptions}
                        getOptionLabel={(option) => option.label || ''}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                        onChange={handleLocation}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Your Location"
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
                      onClick={handleHelpMeClick}
                    >
                      Help Me
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

export default Periods;

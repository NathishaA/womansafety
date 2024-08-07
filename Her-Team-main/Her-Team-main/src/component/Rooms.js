import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isBetween from 'dayjs/plugin/isBetween';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import rr from'../logo/room.jpg';
import Nav from './Nav';
import axios from 'axios';

dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);
dayjs.extend(localizedFormat);
dayjs.extend(isBetween);
dayjs.extend(advancedFormat);

const Rooms = () => {
  const [inputValue, setInputValue] = useState('');
  const [date, setDate] = useState(null);
  const [vacatingDate, setVacatingDate] = useState(null);
  const [options, setOptions] = useState([]);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Mock options for Autocomplete (replace with actual data fetching if needed)
  const mockOptions = [
    { label: 'Sri Krishna College of Technology' },
    { label: 'Ayyapan Temple' },
    { label: 'Gandhipuram, Coimbatore, Tamil Nadu' },
  ];

  useEffect(() => {
    setOptions(mockOptions);
  }, []);

  const handlePlaceSelect = (event, value) => {
    console.log('Selected place:', value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const roomData = {
      location: inputValue,
      bookingDate: date ? dayjs(date).format() : null,
      vacatingDate: vacatingDate ? dayjs(vacatingDate).format() : null,
      email,
      phoneNumber,
    };

    try {
      await axios.post('http://localhost:8080/api/rooms/book', roomData);
      alert('Room booked successfully');
    } catch (error) {
      console.error('Error booking room:', error);
      alert('Failed to book room');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${rr})`, 
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
                backgroundColor: 'rgba(255, 255, 255, 0)',
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'black',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '87%',
                minHeight: '400px',
                color: 'black',
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
                    strings={['Room Booking']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={false}
                  />
                </Typography>
                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Autocomplete
                        freeSolo
                        options={options}
                        getOptionLabel={(option) => option.label || ''}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
                        onChange={handlePlaceSelect}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Location"
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
                    <Grid item xs={12} md={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Box sx={{ mb: 2 }}>
                          <DateTimePicker
                            label="Booking Date and Time"
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </Box>
                        <Box sx={{ mb: 2 }}>
                          <DateTimePicker
                            label="Vacating Date and Time"
                            value={vacatingDate}
                            onChange={(newValue) => setVacatingDate(newValue)}
                            renderInput={(params) => <TextField {...params} fullWidth />}
                          />
                        </Box>
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                      <TextField
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        fullWidth
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{ width: '100%', backgroundColor: '#4CAF50' }}
                    >
                      Book Room
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

export default Rooms;

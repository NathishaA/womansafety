import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import './SignUp.css'; 
import axios from 'axios'; // import axios for API calls

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload = {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      phonenumber: data.get('phonenumber'),
      password: data.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:8080/login', payload);
      if (response.data.success) {
        console.log('Registration successful:', response.data);
        // Navigate to the main page
        window.location.href = '/main';
      } else {
        console.error('Registration failed:', response.data.message);
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error registering!', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="background">
        <Container component="main" maxWidth="xs" sx={{marginLeft:60}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src="logo.png" style={{borderRadius:'500px',height:'150px',width:'150px',marginBottom:'10px'}} />
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phonenumber"
                    label="Phone Number"
                    type="tel"
                    id="PhoneNumber"
                    autoComplete="phonenumber"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

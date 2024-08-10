import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios'; // Import axios for API calls
import GoogleIcon from '@mui/icons-material/Google'; // Import Google icon
import './SignIn.css';

const defaultTheme = createTheme();

export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    const payload = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:8080/login/check', payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.data.success) {
        if (rememberMe) {
          localStorage.setItem('username', username);
        } else {
          sessionStorage.setItem('username', username);
        }

        if (response.data.role === 'admin') {
          navigate('/dashboard'); 
        } else {
          navigate('/services');
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="backgroundd" style={{ position: 'relative', height: '100vh', width: '100vw' }}>
        <Container component="main" maxWidth="xs" sx={{marginLeft:110,backgroundColor:'white',borderRadius:"20px"}}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 6,
              marginBottom: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h5">
              Log In to Your Account
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              
              <Button
                type="submit" 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Typography sx={{textAlign:'center',mb:1}}>or</Typography>
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />} // Add Google icon
                sx={{ mb: 2 }}
              >
                Continue with Google
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="body2" component={RouterLink} to="/signup">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

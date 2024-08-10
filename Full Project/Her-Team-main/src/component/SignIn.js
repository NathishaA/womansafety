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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Button
                type="submit" 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
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

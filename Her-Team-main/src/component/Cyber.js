import React, { useState, useEffect } from 'react';
import { TextField, Button, Container, Grid, Typography, Paper, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { ReactTyped } from 'react-typed';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from '@chakra-ui/react';
import axios from 'axios'; // Import axios for API calls

const Cyber = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !age || !phoneNumber || !email || !complaintText || !file) {
      alert('Please fill all fields and upload a file.');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('age', age);
    formData.append('phoneNumber', phoneNumber);
    formData.append('email', email);
    formData.append('complaintText', complaintText);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8080/api/complaints/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Complaint filed successfully!');
      navigate('/CyberC'); // Navigate to the new route
    } catch (error) {
      alert('Error filing complaint. Please try again.');
      console.error('There was an error!', error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-photo/woman-searching-internet-plane-tickets_23-2148521299.jpg?t=st=1722143784~exp=1722147384~hmac=6ede94a7046ae63780fd4ef5bfa2d8f9434308acc88d134bd3cb81c77c33fc04&w=826")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: 'url("https://img.freepik.com/free-photo/working-woman-feel-serious-looking-laptop-table_1150-15396.jpg?t=st=1722137255~exp=1722140855~hmac=c0f4905e7fe37dd6c60fbd0faeedbba1bbbf3623b9c0744672b685f9a901d6bf&w=740")',
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
              {/* Optional: Add content here */}
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
                    strings={['Cyber Complaint']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={false}
                  />
                </Typography>
                <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2,
                        }}
                      />
                      <TextField
                        label="Age"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2,
                        }}
                      />
                      <TextField
                        label="Phone Number"
                        fullWidth
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2,
                        }}
                      />
                      <TextField
                        label="E-mail"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2,
                        }}
                      />
                      <TextField
                        label="Complaint Text"
                        fullWidth
                        value={complaintText}
                        onChange={(e) => setComplaintText(e.target.value)}
                        multiline
                        rows={4}
                        sx={{
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          borderRadius: 1,
                          '& .MuiInputBase-input': {
                            color: '#000',
                          },
                          mb: 2,
                        }}
                      />
                      <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload Details
                        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
                      </Button>
                      {fileName && (
                        <Typography variant="body2" sx={{ mt: 2, color: 'black' }}>
                          Uploaded File: {fileName}
                        </Typography>
                      )}
                    </Grid>
                  </Grid>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ width: '100%', backgroundColor: '#FF0000' }}
                      type="submit"
                    >
                      File Complaint
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

export default Cyber;

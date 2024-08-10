import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Paper,
  Button,
  Typography,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  CssBaseline
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  People,
  DirectionsBike,
  Security,
  LocalHospital,
  LocalShipping
} from '@mui/icons-material';
import Statistics from './Statistics';

const drawerWidth = 240;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [bikeRides, setBikeRides] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [napkinRequests, setNapkinRequests] = useState([]);
  const [deliveryRequests, setDeliveryRequests] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedView, setSelectedView] = useState('users');
  const [formData, setFormData] = useState({
    firstName: '',
    Name: '',
    email: '',
    phonenumber: '',
    name: '',
    age: '',
    phoneNumber: '',
    complaintText: '',
    address: '',
    location: '',
    requestDate: '',
    pickupLocation: '',
    dropLocation: '',
    deliveryDate: ''
  });

  useEffect(() => {
    if (selectedView === 'users') {
      fetchUsers();
    }
    else if (selectedView === 'bikeRides') {
      fetchBikeRides();
    }
   
    else if (selectedView === 'cyberCrime') {
      fetchComplaints();
    }
   
    else if (selectedView === 'napkinRequests') {
      fetchNapkinRequests();
    }
   
    else if (selectedView === 'pickAndDrop') {
      fetchDeliveryRequests();
    }

    // else if (selectedView === 'dashboard') {
    //   fetchDelievery();
    // }
  }, [selectedView]);

 

  const fetchUsers = () => {
    axios.get('http://localhost:8080/login')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  };

  const fetchDelievery=()=>{
    <Statistics/>
  }

  const fetchBikeRides = () => {
    axios.get('http://localhost:8080/api/ride-requests/getall')
      .then(response => {
        setBikeRides(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bike rides!', error);
      });
  };

  const fetchComplaints = () => {
    axios.get('http://localhost:8080/api/complaints/getall')
      .then(response => {
        setComplaints(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the complaints!', error);
      });
  };

  const fetchNapkinRequests = () => {
    axios.get('http://localhost:8080/api/locations/getall')
      .then(response => {
        setNapkinRequests(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the napkin requests!', error);
      });
  };

  const fetchDeliveryRequests = () => {
    axios.get('http://localhost:8080/api/delivery-requests/getall')
      .then(response => {
        setDeliveryRequests(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the delivery requests!', error);
      });
  };

  const handleClickOpen = (type, item) => {
    setDialogType(type);
    setCurrentItem(item);
    setFormData(item ? { ...item } : { username: '', email: '', phonenumber: '', name: '', age: '', phoneNumber: '', complaintText: '', address: '', location: '', requestDate: '', pickupLocation: '', dropLocation: '', deliveryDate: '' });
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
    setCurrentItem(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (dialogType === 'users') {
      if (currentItem) {
        axios.put(`http://localhost:8080/login/${currentItem.id}`, formData)
          .then(() => {
            fetchUsers(); // Re-fetch users after update
          })
          .catch(error => {
            console.error('There was an error updating the user!', error);
          });
      } else {
        axios.post('http://localhost:8080/login', formData)
          .then(() => {
            fetchUsers(); // Re-fetch users after addition
          })
          .catch(error => {
            console.error('There was an error creating the user!', error);
          });
      }
    } else if (dialogType === 'bikeRides') {
      axios.post('http://localhost:8080/api/ride-requests/request', formData)
          .then(() => {
            fetchBikeRides(); // Re-fetch users after addition
          })
          .catch(error => {
            console.error('There was an error creating the rider!', error);
          });
      // Handle bike rides similarly if needed
    } else if (dialogType === 'cyberCrime') {
      if (currentItem) {
        axios.put(`http://localhost:8080/api/complaints/${currentItem.id}`, formData)
          .then(() => {
            fetchComplaints(); // Re-fetch complaints after update
          })
          .catch(error => {
            console.error('There was an error updating the complaint!', error);
          });
      } else {
        axios.post('http://localhost:8080/api/complaints/file', formData)
          .then(() => {
            fetchComplaints(); // Re-fetch complaints after addition
          })
          .catch(error => {
            console.error('There was an error creating the complaint!', error);
          });
      }
    } 
    else if (dialogType === 'napkinRequests') {
      if (currentItem) {
        axios.put(`http://localhost:8080/api/locations/${currentItem.id}`, formData)
          .then(() => {
            fetchNapkinRequests(); // Re-fetch napkin requests after update
          })
          .catch(error => {
            console.error('There was an error updating the napkin request!', error);
          });
      } else {
        axios.post('http://localhost:8080/api/locations/add', formData)
          .then(() => {
            fetchNapkinRequests(); // Re-fetch napkin requests after addition
          })
          .catch(error => {
            console.error('There was an error creating the napkin request!', error);
          });
      }
    } else if (dialogType === 'pickAndDrop') {
      if (currentItem) {
        axios.put(`http://localhost:8080/api/delivery-requests/${currentItem.id}`, formData)
          .then(() => {
            fetchDeliveryRequests(); // Re-fetch delivery requests after update
          })
          .catch(error => {
            console.error('There was an error updating the delivery request!', error);
          });
      } else {
        axios.post('http://localhost:8080/api/delivery-requests/request', formData)
          .then(() => {
            fetchDeliveryRequests(); // Re-fetch delivery requests after addition
          })
          .catch(error => {
            console.error('There was an error creating the delivery request!', error);
          });
      }
    }
    handleClose();
  };

  const handleDelete = (type, id) => {
    if (type === 'users') {
      axios.delete(`http://localhost:8080/login/${id}`)
        .then(() => {
          fetchUsers(); // Re-fetch users after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the user!', error);
        });
    } else if (type === 'bikeRides') {
      axios.delete(`http://localhost:8080/api/ride-requests/${id}`)
        .then(() => {
          fetchBikeRides(); // Re-fetch users after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the rider!', error);
        });
      // Handle bike rides similarly if needed
    } else if (type === 'cyberCrime') {
      axios.delete(`http://localhost:8080/api/complaints/${id}`)
        .then(() => {
          fetchComplaints(); // Re-fetch complaints after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the complaint!', error);
        });
    } else if (type === 'napkinRequests') {
      axios.delete(`http://localhost:8080/api/locations/${id}`)
        .then(() => {
          fetchNapkinRequests(); // Re-fetch napkin requests after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the napkin request!', error);
        });
    } else if (type === 'pickAndDrop') {
      axios.delete(`http://localhost:8080/api/delivery-requests/${id}`)
        .then(() => {
          fetchDeliveryRequests(); // Re-fetch delivery requests after deletion
        })
        .catch(error => {
          console.error('There was an error deleting the delivery request!', error);
        });
    }
  };

  const renderTable = (data = [], type) => (
    <TableContainer component={Paper} style={{ marginTop: 10}}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(data[0] || {}).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {Object.values(item).map((value, index) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
              <TableCell>
                <IconButton onClick={() => handleClickOpen(type, item)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(type, item.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1,backgroundColor:'#ff66a3' }}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
  {[
    { view: 'dashboard', icon: <People />, text: 'Dashboard' },
    { view: 'users', icon: <People />, text: 'Users' },
    { view: 'bikeRides', icon: <DirectionsBike />, text: 'Bike Rides' },
    { view: 'cyberCrime', icon: <Security />, text: 'Cyber Crime' },
    { view: 'napkinRequests', icon: <LocalHospital />, text: 'Napkin Requests' },
    { view: 'pickAndDrop', icon: <LocalShipping />, text: 'Pick and Drop' },
  ].map((item) => (
    <ListItem
      key={item.view}
      button
      onClick={() => setSelectedView(item.view)}
      sx={{
        position: 'relative',
        '&::after': {
          content: '""',
          display: 'block',
          width: 0,
          height: '2px',
          background: '#ff66a3', // Match the underline with the text color
          transition: 'width 0.3s ease',
          position: 'absolute',
          bottom: 0,
          left: 0,
        },
        '&:hover::after': {
          width: '80%',
        },
      }}
    >
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItem>
  ))}
</List>

        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
                
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column',border:'2px dashed #ff66a3'  }}>
                
              <Button
  variant="contained"
  startIcon={<Add />}
  onClick={() => handleClickOpen(selectedView)}
  sx={{
    backgroundColor: '#ff66a3', // Initial background color
    '&:hover': {
      backgroundColor: '#ff66a3', // Background color on hover
    },
  }}
>
  
  Add {selectedView}
</Button>


                {selectedView === 'dashboard' && <Statistics />}
                {selectedView === 'users' && renderTable(users, 'users')}
                {selectedView === 'bikeRides' && renderTable(bikeRides, 'bikeRides')}
                {selectedView === 'cyberCrime' && renderTable(complaints, 'cyberCrime')}
                {selectedView === 'napkinRequests' && renderTable(napkinRequests, 'napkinRequests')}
                {selectedView === 'pickAndDrop' && renderTable(deliveryRequests, 'pickAndDrop')}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{currentItem ? 'Edit' : 'Add'} {dialogType}</DialogTitle>
        <DialogContent>
          {dialogType === 'users' && (
            <>
                      <TextField
                autoFocus
                margin="dense"
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="phonenumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={formData.phonenumber}
                onChange={handleInputChange}
              />
            </>
          )}
          {dialogType === 'cyberCrime' && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="name"
                label="Name"
                type="text"
                fullWidth
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                name="email"
                label="Email"
                type="text"
                fullWidth
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="age"
                label="Age"
                type="number"
                fullWidth
                value={formData.age}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="phoneNumber"
                label="Phone Number"
                type="text"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="complaintText"
                label="Complaint"
                type="text"
                fullWidth
                multiline
                rows={4}
                value={formData.complaintText}
                onChange={handleInputChange}
              />
            </>
          )}
          {dialogType === 'napkinRequests' && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="label"
                label="Location"
                type="text"
                fullWidth
                value={formData.label}
                onChange={handleInputChange}
              />
              
            </>
          )}
          {dialogType === 'bikeRides' && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="pickupLocation"
                label="Pickup Location"
                type="text"
                fullWidth
                value={formData.pickupLocation}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="destinationLocation"
                label="Drop Location"
                type="text"
                fullWidth
                value={formData.destinationLocation}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="deliveryDate"
                label="Delivery Date"
                type="date"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.deliveryDate}
                onChange={handleInputChange}
              />
            </>
          )}
          {dialogType === 'pickAndDrop' && (
            <>
              <TextField
                autoFocus
                margin="dense"
                name="pickupLocation"
                label="Pickup Location"
                type="text"
                fullWidth
                value={formData.pickupLocation}
                onChange={handleInputChange}
              />
              <TextField
                margin="dense"
                name="dropLocation"
                label="Drop Location"
                type="text"
                fullWidth
                value={formData.dropLocation}
                onChange={handleInputChange}
              />
              
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {currentItem ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;

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
  CssBaseline,
  Divider
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
    lastName: '',
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
    switch (selectedView) {
      case 'users':
        fetchUsers();
        break;
      case 'bikeRides':
        fetchBikeRides();
        break;
      case 'cyberCrime':
        fetchComplaints();
        break;
      case 'napkinRequests':
        fetchNapkinRequests();
        break;
      case 'pickAndDrop':
        fetchDeliveryRequests();
        break;
      default:
        break;
    }
  }, [selectedView]);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/login')
      .then(response => setUsers(response.data))
      .catch(error => console.error('There was an error fetching the users!', error));
  };

  const fetchBikeRides = () => {
    axios.get('http://localhost:8080/api/ride-requests/getall')
      .then(response => setBikeRides(response.data))
      .catch(error => console.error('There was an error fetching the bike rides!', error));
  };

  const fetchComplaints = () => {
    axios.get('http://localhost:8080/api/complaints/getall')
      .then(response => setComplaints(response.data))
      .catch(error => console.error('There was an error fetching the complaints!', error));
  };

  const fetchNapkinRequests = () => {
    axios.get('http://localhost:8080/api/locations/getall')
      .then(response => setNapkinRequests(response.data))
      .catch(error => console.error('There was an error fetching the napkin requests!', error));
  };

  const fetchDeliveryRequests = () => {
    axios.get('http://localhost:8080/api/deliveries/getall')
      .then(response => setDeliveryRequests(response.data))
      .catch(error => console.error('There was an error fetching the delivery requests!', error));
  };

  const handleClickOpen = (type, item) => {
    setDialogType(type);
    setCurrentItem(item);
    setFormData(item ? { ...item } : {
      firstName: '',
      lastName: '',
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
    const endpointMap = {
      'users': `http://localhost:8080/login`,
      'bikeRides': `http://localhost:8080/api/ride-requests/request`,
      'cyberCrime': `http://localhost:8080/api/complaints/file`,
      'napkinRequests': `http://localhost:8080/api/locations/add`,
      'pickAndDrop': `http://localhost:8080/api/deliveries/request`
    };

    const method = currentItem ? 'put' : 'post';
    const url = currentItem ? `${endpointMap[dialogType]}/${currentItem.id}` : endpointMap[dialogType];

    axios[method](url, formData)
      .then(() => {
        switch (dialogType) {
          case 'users':
            fetchUsers();
            break;
          case 'bikeRides':
            fetchBikeRides();
            break;
          case 'cyberCrime':
            fetchComplaints();
            break;
          case 'napkinRequests':
            fetchNapkinRequests();
            break;
          case 'pickAndDrop':
            fetchDeliveryRequests();
            break;
          default:
            break;
        }
      })
      .catch(error => console.error(`There was an error ${method === 'post' ? 'creating' : 'updating'} the ${dialogType}!`, error));

    handleClose();
  };

  const handleDelete = (type, id) => {
    axios.delete(`http://localhost:8080/${type}/${id}`)
      .then(() => {
        switch (type) {
          case 'login':
            fetchUsers();
            break;
          case 'ride-requests':
            fetchBikeRides();
            break;
          case 'complaints':
            fetchComplaints();
            break;
          case 'locations':
            fetchNapkinRequests();
            break;
          case 'deliveries':
            fetchDeliveryRequests();
            break;
          default:
            break;
        }
      })
      .catch(error => console.error(`There was an error deleting the ${type}!`, error));
  };

  const renderTable = (data = [], type) => (
    <TableContainer component={Paper} sx={{ mt: 2, border: '2px solid #ff66a3' }}>
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
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#ff66a3' }}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#fff', borderRight: '1px solid #ff66a3' }
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          {[
            { view: 'users', icon: <People />, text: 'Users' },
            { view: 'bikeRides', icon: <DirectionsBike />, text: 'Bike Rides' },
            { view: 'cyberCrime', icon: <Security />, text: 'Cyber Crime' },
            { view: 'napkinRequests', icon: <LocalHospital />, text: 'Napkin Requests' },
            { view: 'pickAndDrop', icon: <LocalShipping />, text: 'Pick and Drop' }
          ].map((item) => (
            <ListItem
              key={item.view}
              button
              onClick={() => setSelectedView(item.view)}
              sx={{
                backgroundColor: selectedView === item.view ? '#ff66a3' : 'transparent',
                color: selectedView === item.view ? '#fff' : '#000',
                '&:hover': {
                  backgroundColor: '#ff66a3',
                  color: '#fff'
                }
              }}
            >
              <ListItemIcon sx={{ color: selectedView === item.view ? '#fff' : '#000' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#fff', p: 3 }}
      >
        <Toolbar />
        {selectedView === 'statistics' && <Statistics />}
        {selectedView !== 'statistics' && renderTable(
          {
            users: users,
            bikeRides: bikeRides,
            cyberCrime: complaints,
            napkinRequests: napkinRequests,
            pickAndDrop: deliveryRequests
          }[selectedView],
          {
            users: 'login',
            bikeRides: 'ride-requests',
            cyberCrime: 'complaints',
            napkinRequests: 'locations',
            pickAndDrop: 'deliveries'
          }[selectedView]
        )}
      </Box>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{dialogType === 'users' ? (currentItem ? 'Edit User' : 'Add User') : (currentItem ? 'Edit Request' : 'Add Request')}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
          />
          {/* Add more fields as needed based on dialogType */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Dashboard;

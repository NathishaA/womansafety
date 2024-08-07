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
import { Add, Edit, Delete, People, Group, DirectionsBike, Hotel, FitnessCenter, Wc, PregnantWoman, Security, LocalHospital } from '@mui/icons-material';

const drawerWidth = 240;

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [services, setServices] = useState({
    bikeRides: [],
    roomBookings: [],
    fitness: [],
    menstruation: [],
    pregnancy: [],
    cyberCrime: [],
    doctors: [],
    mentalCounseling: []
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [currentItem, setCurrentItem] = useState(null);
  const [selectedView, setSelectedView] = useState('users');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    designation: ''
  });

  useEffect(() => {
    if (selectedView === 'users') {
      axios.get('/api/users')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }
  }, [selectedView]);

  const handleClickOpen = (type, item) => {
    setDialogType(type);
    setCurrentItem(item);
    setFormData(item ? { ...item } : { name: '', email: '', phone: '', designation: '' });
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
    if (dialogType === 'user') {
      if (currentItem) {
        setUsers(users.map(user => user.id === currentItem.id ? { ...user, ...formData } : user));
      } else {
        setUsers([...users, { id: Date.now(), ...formData }]);
      }
    } else if (dialogType === 'employee') {
      if (currentItem) {
        setEmployees(employees.map(employee => employee.id === currentItem.id ? { ...employee, ...formData } : employee));
      } else {
        setEmployees([...employees, { id: Date.now(), ...formData }]);
      }
    } else {
      if (currentItem) {
        setServices(prevServices => ({
          ...prevServices,
          [dialogType]: prevServices[dialogType].map(service => service.id === currentItem.id ? { ...service, ...formData } : service)
        }));
      } else {
        setServices(prevServices => ({
          ...prevServices,
          [dialogType]: [...prevServices[dialogType], { id: Date.now(), ...formData }]
        }));
      }
    }
    handleClose();
  };

  const handleDelete = (type, id) => {
    if (type === 'user') {
      setUsers(users.filter(user => user.id !== id));
    } else if (type === 'employee') {
      setEmployees(employees.filter(employee => employee.id !== id));
    } else {
      setServices(prevServices => ({
        ...prevServices,
        [type]: prevServices[type].filter(service => service.id !== id)
      }));
    }
  };

  const renderTable = (data = [], type) => (
    <TableContainer style={{ marginTop: 10 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{type === 'user' ? 'Name' : type === 'employee' ? 'Employee Name' : 'Service Name'}</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            {type === 'employee' && <TableCell>Designation</TableCell>}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              {type === 'employee' && <TableCell>{item.designation}</TableCell>}
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
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: 1201, bgcolor: '#ff66ab' }}>
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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button onClick={() => setSelectedView('users')}>
              <ListItemIcon><People /></ListItemIcon>
              <ListItemText primary="Manage Users" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('employees')}>
              <ListItemIcon><Group /></ListItemIcon>
              <ListItemText primary="Manage Employees" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('bikeRides')}>
              <ListItemIcon><DirectionsBike /></ListItemIcon>
              <ListItemText primary="Manage Bike Rides" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('roomBookings')}>
              <ListItemIcon><Hotel /></ListItemIcon>
              <ListItemText primary="Manage Rooms" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('fitness')}>
              <ListItemIcon><FitnessCenter /></ListItemIcon>
              <ListItemText primary="Manage Fitness" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('cyberCrime')}>
              <ListItemIcon><Wc /></ListItemIcon>
              <ListItemText primary="Manage Cyber Crime" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('mentalCounseling')}>
              <ListItemIcon><PregnantWoman /></ListItemIcon>
              <ListItemText primary="Manage Mental Counseling" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('menstruation')}>
              <ListItemIcon><Security /></ListItemIcon>
              <ListItemText primary="Manage Menstruation" />
            </ListItem>
            <ListItem button onClick={() => setSelectedView('pregnancy')}>
              <ListItemIcon><LocalHospital /></ListItemIcon>
              <ListItemText primary="Manage Pregnancy" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#FFC0CB', p: 3, mt: '64px', minHeight: '100vh' }} // Light pink color
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper style={{ padding: 16 }}>
                <Typography variant="h6">
                  {selectedView === 'users' ? 'Users' : selectedView === 'employees' ? 'Employees' : `Manage ${selectedView.charAt(0).toUpperCase() + selectedView.slice(1)}`}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<Add />}
                  onClick={() => handleClickOpen(selectedView === 'users' ? 'user' : selectedView === 'employees' ? 'employee' : selectedView, null)}
                >
                  Add {selectedView === 'users' ? 'User' : selectedView === 'employees' ? 'Employee' : selectedView.charAt(0).toUpperCase() + selectedView.slice(1)}
                </Button>
                {selectedView === 'users' ? renderTable(users, 'user') : selectedView === 'employees' ? renderTable(employees, 'employee') : renderTable(services[selectedView] || [], selectedView)}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{dialogType === 'user' ? 'User' : dialogType === 'employee' ? 'Employee' : 'Service'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            name="phone"
            value={formData.phone || ''}
            onChange={handleInputChange}
          />
          {dialogType === 'employee' && (
            <TextField
              margin="dense"
              label="Designation"
              type="text"
              fullWidth
              variant="standard"
              name="designation"
              value={formData.designation || ''}
              onChange={handleInputChange}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;

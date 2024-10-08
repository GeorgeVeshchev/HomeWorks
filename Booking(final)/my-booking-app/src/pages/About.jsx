import React from 'react';
import { Typography, Box, Paper, Button, AppBar, Toolbar } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" sx={{ mb: 4, backgroundColor: 'transparent', borderBottom: '1px solid orange' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'orange' }}>
            Hotel Finder
          </Typography>
          <Box>
            <Button
              color="inherit"
              onClick={() => navigate('/hotels')}
              sx={{ mr: 2, border: '1px solid orange', color: 'orange' }}
            >
              Hotels
            </Button>
            <Button
              color="inherit"
              onClick={() => navigate('/')}
              sx={{ border: '1px solid orange', color: 'orange' }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Paper sx={{ padding: 3, marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            Our Company
          </Typography>
          <Typography paragraph>
            We are a leading travel agency specializing in providing the best hotel bookings and travel solutions worldwide. Our mission is to offer our customers a seamless and unforgettable travel experience.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography paragraph>
            <strong>Company Name:</strong> Your Travel Co.<br />
            <strong>Office Location:</strong> 123 Travel Street, Suite 456, City, Country<br />
            <strong>Phone:</strong> +1 (123) 456-7890<br />
            <strong>Email:</strong> info@yourtravelco.com<br />
            <strong>Website:</strong> <a href="https://www.yourtravelco.com" target="_blank" rel="noopener noreferrer">www.yourtravelco.com</a>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Our Services
          </Typography>
          <Typography paragraph>
            We offer a range of services including hotel reservations, flight bookings, car rentals, and personalized travel itineraries. Our team of experts is dedicated to making your travel plans as smooth and enjoyable as possible.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

export default AboutPage;

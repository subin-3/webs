import { Container, Typography, Box, Link, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Privacy() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>1. Information We Collect</Typography>
        <Typography paragraph>
          We collect personal information such as name, email address, and payment details when you register for our services.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>2. How We Use Your Data</Typography>
        <Typography paragraph>
          Your information is used to provide and improve our services, process payments, and communicate with you.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>3. Data Protection</Typography>
        <Typography paragraph>
          We implement security measures to protect your data, including encryption and secure servers.
        </Typography>
      </Box>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>4. Third-Party Services</Typography>
        <Typography paragraph>
          We may use trusted third-party services for payment processing and analytics, who are obligated to protect your data.
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button 
          component={RouterLink}
          to="/signup"
          variant="contained"
          size="large"
        >
          Back to Sign Up
        </Button>
      </Box>
    </Container>
  );
}
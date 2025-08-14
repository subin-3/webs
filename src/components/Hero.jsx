import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Box sx={{
      height: { xs: 'calc(100vh - 56px)', md: 'calc(100vh - 64px)' }, // Accounts for navbar
      width: '100%',
      backgroundImage: 'url(https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay
        zIndex: 1
      }
    }}>
      <Box sx={{ 
        position: 'relative',
        zIndex: 2,
        px: 3,
        maxWidth: '800px'
      }}>
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 700,
            color: 'white',
            mb: 3,
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}
        >
          Welcome to WEBS
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            color: 'white',
            mb: 4,
            textShadow: '0 1px 3px rgba(0,0,0,0.5)'
          }}
        >
          Open Educational Library - Your gateway to knowledge
        </Typography>
        <Button 
          component={Link}
          to="/courses"
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#4285F4',
            color: 'white',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#3367D6',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Explore Courses
        </Button>
      </Box>
    </Box>
  );
}
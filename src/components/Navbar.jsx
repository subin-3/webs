import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/images/WEBS.png';

export default function Navbar() {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1200,
        width: '100%',
      }}
    >
      <Toolbar sx={{ 
        maxWidth: 'xl',
        mx: 'auto',
        width: '100%',
        px: 3
      }}>
        {/* Logo with Title */}
        <Box 
          component={Link} 
          to="/" 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            textDecoration: 'none',
            mr: 4
          }}
        >
          <img 
            src={logo} 
            alt="WEBS Logo" 
            style={{ 
              height: '50px',
              marginRight: '12px'
            }} 
          />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}
          >
            WEBS
          </Typography>
        </Box>
        
        {/* Navigation Links */}
        <Box sx={{ display: 'flex', flexGrow: 1, gap: 1 }}>
          <Button 
            component={Link} 
            to="/"
            sx={{ 
              color: '#5f6368',
              fontWeight: 500,
              '&:hover': {
                color: '#4285F4'
              }
            }}
          >
            Home
          </Button>
          <Button 
            component={Link} 
            to="/about"
            sx={{ 
              color: '#5f6368',
              fontWeight: 500,
              '&:hover': {
                color: '#34A853'
              }
            }}
          >
            About
          </Button>
          <Button 
            component={Link} 
            to="/Courses"
            sx={{ 
              color: '#5f6368',
              fontWeight: 500,
              '&:hover': {
                color: '#FBBC05'
              }
            }}
          >
            Courses
          </Button>
          <Button 
            component={Link} 
            to="/contact"
            sx={{ 
              color: '#5f6368',
              fontWeight: 500,
              '&:hover': {
                color: '#EA4335'
              }
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
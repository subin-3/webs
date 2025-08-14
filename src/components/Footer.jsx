import { Box, Typography, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import logo from '../assets/images/WEBS.png';

export default function Footer() {
  // Social media links
  const socialLinks = {
    facebook: 'https://www.facebook.com/sanjeev.shrestha.3382',
    twitter: 'https://x.com/san_je_ev',
    instagram: 'https://www.instagram.com/san_je_ev/',
    linkedin: 'https://www.linkedin.com/in/san-j-e-ev-b6b669357/'
  };

  return (
    <Box sx={{
      backgroundColor: '#f8f9fa',
      color: '#212529',
      borderTop: '1px solid #e9ecef',
      py: 6,
      px: 2,
      width: '100%',
      margin: 0
    }}>
      <Grid container justifyContent="center" spacing={4} sx={{ 
        maxWidth: 'lg',
        mx: 'auto'
      }}>
        {/* Logo and Description */}
        <Grid item xs={12} md={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' } }}>
            <img 
              src={logo} 
              alt="WEBS Logo" 
              style={{ 
                height: '50px',
                marginBottom: '16px'
              }} 
            />
            <Typography variant="body2" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              WEBS - Open Educational Library provides free learning resources for everyone.
            </Typography>
            <Box>
              <IconButton 
                aria-label="Facebook" 
                sx={{ color: '#4267B2' }}
                component="a"
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </IconButton>
              <IconButton 
                aria-label="Twitter" 
                sx={{ color: '#1DA1F2' }}
                component="a"
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                sx={{ color: '#E1306C' }}
                component="a"
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn" 
                sx={{ color: '#0077B5' }}
                component="a"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Explore
          </Typography>
          <Link href="/courses" color="inherit" underline="hover" display="block" gutterBottom>
            Courses
          </Link>
          <Link href="/subjects" color="inherit" underline="hover" display="block" gutterBottom>
            Subjects
          </Link>
          <Link href="/educators" color="inherit" underline="hover" display="block" gutterBottom>
            Educators
          </Link>
          <Link href="/resources" color="inherit" underline="hover" display="block" gutterBottom>
            Resources
          </Link>
        </Grid>

        {/* Support */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Support
          </Typography>
          <Link href="/help" color="inherit" underline="hover" display="block" gutterBottom>
            Help Center
          </Link>
          <Link href="/contact" color="inherit" underline="hover" display="block" gutterBottom>
            Contact Us
          </Link>
          <Link href="/faq" color="inherit" underline="hover" display="block" gutterBottom>
            FAQs
          </Link>
          <Link href="/feedback" color="inherit" underline="hover" display="block" gutterBottom>
            Feedback
          </Link>
        </Grid>

        {/* Legal */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Legal
          </Typography>
          <Link href="/terms" color="inherit" underline="hover" display="block" gutterBottom>
            Terms
          </Link>
          <Link href="/privacy" color="inherit" underline="hover" display="block" gutterBottom>
            Privacy
          </Link>
          <Link href="/cookies" color="inherit" underline="hover" display="block" gutterBottom>
            Cookies
          </Link>
          <Link href="/licenses" color="inherit" underline="hover" display="block" gutterBottom>
            Licenses
          </Link>
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Stay Updated
          </Typography>
          <Typography variant="body2" gutterBottom>
            Subscribe to our newsletter for the latest resources.
          </Typography>
          <Box component="form" sx={{ display: 'flex', mt: 2 }}>
            <input 
              type="email" 
              placeholder="Your email" 
              style={{
                padding: '10px',
                border: '1px solid #ced4da',
                borderRadius: '4px 0 0 4px',
                flexGrow: 1,
                fontSize: '14px'
              }}
              required
            />
            <button 
              type="submit"
              style={{
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                padding: '0 15px',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Subscribe
            </button>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ 
        textAlign: 'center', 
        mt: 4,
        pt: 3,
        borderTop: '1px solid #e9ecef'
      }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} WEBS Open Educational Library. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
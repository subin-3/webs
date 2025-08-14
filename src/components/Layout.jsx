import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
  const email = import.meta.env.VITE_MYEMAIL;

  const formsubmitUrl = `https://formsubmit.co/${email}`;}

export default function Layout({ children }) {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden'
    }}>
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content Area */}
      <Box 
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          pt: { xs: '56px', md: '64px' } // Matches navbar height
        }}
      >
        {children}
      </Box>
      
      {/* Footer */}
      <Footer />
    </Box>
  );
}

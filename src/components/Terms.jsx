import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <Container maxWidth="md" sx={{ py: 4, lineHeight: 1.6 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3, color: 'primary.main' }}>
        Terms of Service
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>1. Free Platform</Typography>
        <Typography paragraph>
          This is a 100% free educational platform. All courses and features are available without any charges now or in the future.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>2. Account Responsibility</Typography>
        <Typography paragraph>
          You're responsible for maintaining your account credentials. Don't share your login details with others.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>3. Content Usage</Typography>
        <Typography paragraph>
          All learning materials are for personal use only. You may not redistribute, sell, or use them commercially without permission.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>4. Community Guidelines</Typography>
        <Typography paragraph>
          Be respectful to other learners. We reserve the right to remove inappropriate content or suspend accounts violating these norms.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>5. Service Changes</Typography>
        <Typography paragraph>
          We may update or modify the platform at any time. Continued use means you accept these changes.
        </Typography>
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ px: 4 }}
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
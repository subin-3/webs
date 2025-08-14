import { Box, Container, Typography } from '@mui/material';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8, px: { xs: 2, md: 4 } }}>
        {/* Features Section */}
        <Typography variant="h4" align="center" gutterBottom sx={{ 
          fontWeight: 600,
          mb: 6,
          color: 'text.primary'
        }}>
          Why Choose WEBS?
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: 4,
          mb: 8
        }}>
          {[
            {
              title: "Free Resources",
              description: "Access thousands of free educational materials from top institutions"
            },
            {
              title: "Expert Educators",
              description: "Learn from experienced teachers and industry professionals"
            },
            {
              title: "Flexible Learning",
              description: "Study at your own pace, anytime and anywhere"
            }
          ].map((feature, index) => (
            <Box key={index} sx={{ 
              p: 3,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              textAlign: 'center'
            }}>
              <Typography variant="h5" gutterBottom sx={{ 
                fontWeight: 600,
                color: 'primary.main'
              }}>
                {feature.title}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                {feature.description}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ 
          backgroundColor: 'primary.light',
          borderRadius: 3,
          p: 6,
          textAlign: 'center',
          mb: 8
        }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Ready to Start Learning?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Join thousands of students who are advancing their knowledge with WEBS
          </Typography>
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
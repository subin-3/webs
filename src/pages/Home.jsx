import Hero from '../components/Hero';
import { Container, Typography, Box, Grid, Button, Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { CheckCircle, School, WorkspacePremium, Group } from '@mui/icons-material';

export default function Home() {
  // Course data with image URLs
  const featuredCourses = [
    { 
      id: 1, 
      title: "Web Development Fundamentals", 
      desc: "Master HTML, CSS, and JavaScript to build modern websites.",
      imageUrl: "https://jessup.edu/wp-content/uploads/2024/01/Is-Web-Development-Oversaturated.jpg"
    },
    { 
      id: 2, 
      title: "Data Science Essentials", 
      desc: "Introduction to Python, pandas, and data visualization techniques.",
      imageUrl: "https://geneveinstitute.com/upload/posts/Short_Diploma_in_Data_Science_Essentials_and_Advanced_Techniques.jpg"
    },
    { 
      id: 3, 
      title: "UX/UI Design Principles", 
      desc: "Learn user-centered design approaches and prototyping tools.",
      imageUrl: "https://internshub.co.in/wp-content/uploads/2023/08/uiux.jpg"
    }
  ];

  return (
    <>
      <Hero />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Benefits Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
            Why Choose Our Platform?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <School sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Expert Instructors</Typography>
                <Typography>
                  Learn from industry professionals with years of practical experience.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <WorkspacePremium sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Certification</Typography>
                <Typography>
                  Earn recognized certificates to boost your career prospects.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Group sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Community</Typography>
                <Typography>
                  Join a vibrant community of learners and professionals.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <CheckCircle sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h6" gutterBottom>Flexible Learning</Typography>
                <Typography>
                  Study at your own place, anytime, anywhere.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Featured Courses with Images */}
        <Typography variant="h4" align="center" gutterBottom sx={{ mb: 6 }}>
          Featured Courses
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredCourses.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <Box sx={{
                p: 0,
                borderRadius: 2,
                boxShadow: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)'
                },
                overflow: 'hidden'
              }}>
                <Box
                  component="img"
                  src={course.imageUrl}
                  alt={course.title}
                  sx={{
                    width: '100%',
                    height: 200,
                    objectFit: 'cover',
                    mb: 0
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    {course.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2, flexGrow: 1 }}>
                    {course.desc}
                  </Typography>
                  <Button 
                    component={Link}
                    to={`/course-${course.id}`}
                    variant="outlined"
                    fullWidth
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials */}
        <Box sx={{ mb: 8, bgcolor: 'background.paper', p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            {[
              { name: "Sarah Johnson", role: "Web Developer", quote: "The courses helped me transition careers in just 6 months." },
              { name: "Michael Chen", role: "Data Analyst", quote: "Practical projects gave me the portfolio I needed to get hired." },
              { name: "Emma Rodriguez", role: "UX Designer", quote: "The community support made all the difference in my learning journey." }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ p: 3, height: '100%' }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                    "{testimonial.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{testimonial.name.charAt(0)}</Avatar>
                    <Box>
                      <Typography fontWeight="bold">{testimonial.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{testimonial.role}</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{
          bgcolor: 'primary.light',
          borderRadius: 3,
          p: 6,
          textAlign: 'center',
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
          color: 'common.white',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          <Typography variant="h3" gutterBottom>
            Ready to Start Learning?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
            Join thousands of people advancing their education with WEBS
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              component={Link}
              to="/signup"
              variant="contained"
              size="large"
              sx={{ px: 4 }}
            >
              Create Free Account
            </Button>
            <Button 
              component={Link}
              to="/courses"
              variant="outlined"
              size="large"
              sx={{ px: 4, color: 'common.white', borderColor: 'common.white' }}
            >
              Browse Courses
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
import { Box, Typography, Grid, Avatar, Button, Chip } from '@mui/material';
import { School, Groups, Public, LibraryBooks } from '@mui/icons-material';

export default function AboutSection() {
  // Team member data with image URLs - leader first
  const teamMembers = [
    { 
      name: "Subin Shrestha", 
      role: "Creator",
      imageUrl: "/creator.jpg",
      isLeader: true
    },
    { 
      name: "Aayush Saud", 
      role: "Member",
      imageUrl: "https://source.unsplash.com/random/300x300/?portrait,man,nepal" 
    },
    { 
      name: "Michal Buddha", 
      role: "Member",
      imageUrl: "https://source.unsplash.com/random/300x300/?portrait,man,polish" 
    },
    { 
      name: "Pushpa Nepal", 
      role: "Member",
      imageUrl: "https://source.unsplash.com/random/300x300/?portrait,woman,nepal" 
    },
    { 
      name: "Sudip Sharma", 
      role: "Member",
      imageUrl: "https://source.unsplash.com/random/300x300/?portrait,man,indian" 
    }
  ];

  return (
    <Box sx={{ 
      py: 10,
      px: 2,
      backgroundColor: '#f9f9f9'
    }}>
      <Box sx={{ 
        maxWidth: 'lg',
        mx: 'auto'
      }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            About WEBS
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Democratizing education through open access
          </Typography>
        </Box>

        {/* Mission Statement */}
        <Box sx={{ 
          backgroundColor: 'white',
          p: 6,
          borderRadius: 3,
          boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          mb: 8,
          textAlign: 'center'
        }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Our Mission
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            WEBS is a non-profit initiative dedicated to providing free, high-quality 
            educational resources to learners worldwide. We believe knowledge should be 
            accessible to everyone, regardless of geographic or economic barriers.
          </Typography>
        </Box>

        {/* Stats Grid */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            { 
              icon: <School sx={{ fontSize: 40 }} />, 
              value: '500+', 
              label: 'Courses', 
              color: '#4285F4' 
            },
            { 
              icon: <Groups sx={{ fontSize: 40 }} />, 
              value: '100K+', 
              label: 'Active Learners', 
              color: '#34A853' 
            },
            { 
              icon: <Public sx={{ fontSize: 40 }} />, 
              value: '150+', 
              label: 'Countries', 
              color: '#FBBC05' 
            },
            { 
              icon: <LibraryBooks sx={{ fontSize: 40 }} />, 
              value: '10K+', 
              label: 'Resources', 
              color: '#EA4335' 
            }
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3
              }}>
                <Avatar sx={{ 
                  bgcolor: stat.color, 
                  width: 80, 
                  height: 80,
                  mb: 3
                }}>
                  {stat.icon}
                </Avatar>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Story Section */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          mb: 8
        }}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2025 by a group of educators and technologists, WEBS began 
              as a small collection of open course materials shared among local 
              community colleges.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, we've grown into a global platform serving millions of learners, 
              with content contributions from top universities and industry experts.
            </Typography>
          </Box>
          <Box sx={{ 
            flex: 1,
            borderRadius: 3,
            height: 400,
            backgroundImage: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <Typography variant="h5" sx={{ textAlign: 'center', p: 4 }}>
              "Education is the most powerful weapon which you can use to change the world"
            </Typography>
          </Box>
        </Box>

        {/* Team Preview with Images */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            Meet the Team
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Passionate educators and innovators
          </Typography>
          
          {/* Leader Section */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            mb: 6
          }}>
            {teamMembers.filter(member => member.isLeader).map((leader, index) => (
              <Box key={index} sx={{ 
                maxWidth: 300,
                p: 4,
                borderRadius: 3,
                backgroundColor: 'white',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)'
              }}>
                <Avatar 
                  src={leader.imageUrl}
                  sx={{ 
                    width: 180, 
                    height: 180, 
                    mb: 3,
                    mx: 'auto',
                    border: '4px solid #4285F4'
                  }} 
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  {leader.name}
                </Typography>
                <Chip 
                  label={leader.role}
                  color="primary"
                  sx={{ 
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Team Members Grid */}
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {teamMembers.filter(member => !member.isLeader).map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ 
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  }
                }}>
                  <Avatar 
                    src={member.imageUrl}
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mb: 2,
                      mx: 'auto',
                      border: '3px solid #4285F4'
                    }} 
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large"
            href="/about"
            sx={{ 
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }
            }}
          >
            Learn More About Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
import { Container, Typography, Box, Grid, Chip, TextField, Button } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function Courses() {
  const categories = [
    "All", "Computer Science", "Mathematics", 
    "Business", "Languages", "Science", "Humanities"
  ];

  const courses = [
    {
      title: "Introduction to Programming",
      category: "Computer Science",
      level: "Beginner",
      duration: "8 Weeks",
      image: "https://dotnettrickscloud.blob.core.windows.net/article/3720230518234845.webp"
    },
    {
      title: "Calculus I",
      category: "Mathematics",
      level: "Intermediate",
      duration: "12 Weeks",
      image: "https://miro.medium.com/v2/resize:fit:990/1*RJ8DZD1b-ipwDENqdK3WRA.png"
    },
    {
      title: "Financial Accounting",
      category: "Business",
      level: "Beginner",
      duration: "6 Weeks",
      image: "https://skfinancial.com/public/uploads/blogs/q58W1IxdoFK3Q0Km0HXPzjTDuh2jCOrDj8jZsU4S.png"
    },
    {
      title: "Spanish for Beginners",
      category: "Languages",
      level: "Beginner",
      duration: "10 Weeks",
      image: "https://m.media-amazon.com/images/I/7114AQlTE5L._UF1000,1000_QL80_.jpg"
    },
    {
      title: "Introduction to Biology",
      category: "Science",
      level: "Beginner",
      duration: "8 Weeks",
      image: "https://www.xanedu.com/hs-fs/hubfs/flexed-course-inroduction-to-biology-large-image.jpg?width=850&height=550&name=flexed-course-inroduction-to-biology-large-image.jpgy"
    },
    {
      title: "World History",
      category: "Humanities",
      level: "Intermediate",
      duration: "10 Weeks",
      image: "https://ohmyfacts.com/wp-content/uploads/2024/05/20-facts-about-world-history-1714539154.jpeg"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4, fontWeight: 700 }}>
        Browse Courses
      </Typography>
      
      {/* Search and Filter */}
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          placeholder="Search courses..."
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'action.active' }} />
          }}
          sx={{ 
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: 2
            }
          }}
        />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {categories.map((category) => (
            <Chip 
              key={category}
              label={category}
              clickable
              sx={{ 
                borderRadius: 1,
                px: 1,
                py: 1.5,
                fontWeight: 500
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Course List */}
      <Grid container spacing={3}>
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{
              p: 0,
              borderRadius: 2,
              boxShadow: 1,
              height: '100%',
              transition: 'all 0.3s ease',
              overflow: 'hidden',
              backgroundColor: 'background.paper',
              '&:hover': {
                boxShadow: 3,
                transform: 'translateY(-4px)'
              }
            }}>
              {/* Course Image */}
              <Box
                component="img"
                src={course.image}
                alt={course.title}
                sx={{
                  width: '100%',
                  height: 160,
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              
              {/* Course Content */}
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {course.title}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                  <Chip 
                    label={course.category} 
                    size="small" 
                    color="primary"
                    sx={{ fontWeight: 500 }}
                  />
                  <Chip 
                    label={course.level} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Duration: {course.duration}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ 
                    mt: 1,
                    fontWeight: 500
                  }}
                >
                  View Course
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
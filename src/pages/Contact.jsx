import { Box, Typography, Grid, TextField, Button, Avatar, Divider, CircularProgress, Alert } from '@mui/material';
import { Send, Email, Phone, LocationOn, Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import { useState } from 'react';

export default function Contact() {
  const formsubmitUrl = `https://formsubmit.co/ajax/${import.meta.env.VITE_EMAIL}`;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(formsubmitUrl, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission - Subin's Portfolio",
          _template: "box",
          _captcha: "false",
          _autoresponse: `Thank you ${formData.name} for contacting me! I'll get back to you soon.`
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Social media links
  const socialLinks = {
    facebook: 'https://www.facebook.com/sanjeev.shrestha.3382',
    twitter: 'https://x.com/san_je_ev',
    instagram: 'https://www.instagram.com/san_je_ev/',
    linkedin: 'https://www.linkedin.com/in/san-j-e-ev-b6b669357/'
  };

  return (
    <Box sx={{
      py: 8,
      px: 2,
      background: 'linear-gradient(to bottom, #ffffff 0%, #f9f9f9 100%)'
    }}>
      <Grid container justifyContent="center" sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Left Side - Contact Form */}
        <Grid item xs={12} md={6} sx={{ pr: { md: 4 } }}>
          <Box sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
            backgroundColor: 'white',
            height: '100%'
          }}>
            <Typography variant="h3" gutterBottom sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>
              Get In Touch
            </Typography>

            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Message sent successfully! We'll get back to you soon.
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 3 }}>
                Failed to send message. Please try again later.
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                sx={{ mb: 3 }}
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />

              <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 3 }}
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />

              <TextField
                fullWidth
                label="Your Message"
                variant="outlined"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ mb: 3 }}
                InputProps={{
                  sx: { borderRadius: 2 }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={isSubmitting ? <CircularProgress size={24} /> : <Send />}
                disabled={isSubmitting}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #4285F4 0%, #34A853 100%)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(66, 133, 244, 0.3)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Contact Info */}
        <Grid item xs={12} md={6} sx={{ pl: { md: 4 }, mt: { xs: 4, md: 0 } }}>
          <Box sx={{
            p: 4,
            borderRadius: 4,
            backgroundImage: 'linear-gradient(135deg, #4285F4 0%, #34A853 90%)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
              Contact Information and our Social Media
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#4285F4', mr: 2 }}>
                  <Email />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">
                    {import.meta.env.VITE_EMAIL || 'shresthasubin130@gmail.com'}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#34A853', mr: 2 }}>
                  <Phone />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Phone
                  </Typography>
                  <Typography variant="body1">
                    +977 984-9806159
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: '#FBBC05', mr: 2 }}>
                  <LocationOn />
                </Avatar>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Address
                  </Typography>
                  <Typography variant="body1">
                    Boudha<br />
                    Tushal, Mahankal road<br />
                    Kathmandu, Nepal
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Connect with me:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {Object.entries(socialLinks).map(([platform, url]) => (
                  <Avatar
                    key={platform}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      bgcolor: {
                        facebook: '#4267B2',
                        twitter: '#1DA1F2',
                        linkedin: '#0077B5',
                        instagram: '#E1306C'
                      }[platform],
                      '&:hover': { transform: 'scale(1.1)' },
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                  >
                    {{
                      facebook: <Facebook />,
                      twitter: <Twitter />,
                      linkedin: <LinkedIn />,
                      instagram: <Instagram />
                    }[platform]}
                  </Avatar>
                ))}
              </Box>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                Working Hours:
              </Typography>
              <Typography variant="body2">
                Sunday-Thursday: 9:00 AM - 6:00 PM<br />
                Friday: 10:00 AM - 4:00 PM<br />
                Saturday: Closed
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
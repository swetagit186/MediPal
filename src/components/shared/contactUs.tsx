import { Stack, Typography,Container,Grid,Box,List, ListItem, ListItemText, Divider,IconButton  } from '@mui/material';
import Image from 'next/image';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ST } from 'next/dist/shared/lib/utils';
import {  TextField , InputLabel,} from '@mui/material';
import { AccountCircle, Email, Subject } from '@mui/icons-material';
import React from 'react';
import { Phone } from '@mui/icons-material';

const theme = createTheme({
    typography: {
      fontFamily: [
        'DM sans',
        'Roboto', // Your custom font
        'Arial', // Fallback font
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontWeightBold: 700, // Adjust font weight for boldness
    },
  });

  interface ChildComponentProps {
    textColor: string; // Specify the type of the textColor prop as string
    backgroundColor:string;
    text:string;
    hoverColor:string;
  }

const ContactUs: React.FC<ChildComponentProps> =({textColor,backgroundColor,text,hoverColor})=>{
    const [isHovered, setIsHovered] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: ''
      });
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        // You can send this data to your server or perform any other action
      };
    

    return(
        <Box   sx={{ backgroundColor:{backgroundColor}, minHeight: '60vh', position: 'relative' ,alignItems:'cnter',justifyContent:'center'}}>
            <ThemeProvider theme={theme} >
    <Stack 
      position="absolute"
      left="0"  // Move Stack to the center horizontally
      top="50%"
      
      height="50%"  // Set to half of the container height
      width="35%"
      justifyContent="center"
      alignItems="items-start" 
      direction="column"
      style={{ transform: 'translateX(0%) translateY(-50%)' }}
      spacing={2}
      
      p={15}>
        {/* Example of using Typography with custom font and boldness */}
        <Stack direction="row" align-items="center" justifyContent="items-start" spacing={2}>
          <Image src="/assets/heartline.svg" alt="bubble" height={40} width={40}></Image>
          <Typography variant="h6" fontWeight="bold" style={{ color: textColor }}>
          GET AN APPOINTMENT
        </Typography>
        </Stack>
        
        <Typography variant="h3" fontWeight="bold" style={{ color: text }}>
        The Wide Network of Best Healthcare
        </Typography>
        <Typography variant="h6" style={{ color: text }}>
        Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily.
        </Typography>
       
      </Stack>
      <Stack 
       position="absolute"
       right="0"  // Move Stack to the center horizontally
       top="50%"
       
       height="50%"  // Set to half of the container height
       width="35%"
       justifyContent="center"
       alignItems="items-start" 
       direction="column"
       style={{ transform: 'translateX(0%) translateY(-50%)' }}
       spacing={2}
       
       p={15}>
      <Box sx={{ maxWidth: 800, margin: 'auto', padding:1 }}>
      
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <Box mr={1}>
                    <AccountCircle color="primary" />
                  </Box>
                )
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: 'black' }
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
            <TextField
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <Box mr={1}>
                    <Email color="primary" />
                  </Box>
                )
              }}
              InputLabelProps={{
                
                style: { color: 'black' }
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              placeholder="Phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <Box mr={1}>
                    <Phone color="primary" />
                  </Box>
                )
              }}
              InputLabelProps={{
                shrink: true,
                
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
            <TextField
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <Box mr={1}>
                    <Subject color="primary" />
                  </Box>
                )
              }}
              InputLabelProps={{
                shrink: true,
                style: { color: 'black' }
              }}
              sx={{ backgroundColor: 'white', borderRadius: 5 }}
            />
          </Grid>
        </Grid>
        
      </form>
    </Box>
    <Stack alignItems='center'
    justifyContent='center'
      direction="row"
      
      spacing={2} >
    <Button
          sx={{
        height: '60px', // Adjust the height as needed
        width: '220px',
        fontWeight: 'bold', 
        borderRadius: '15px',
        '&:hover': {
          color:{hoverColor}, // Change text color on hover
          borderColor: 'primary.main', 
          
        },
      }}
      variant={isHovered ? 'outlined' : 'contained'}
      color="primary"
      
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
        BOOK AN APPOINTMENT
    </Button>
    <Typography variant="h6" fontWeight="bold" style={{ color: text }}>
          (OR)
    </Typography>
    <Box display="flex" alignItems="center"  borderRadius="4px" p={1}>
      <IconButton style={{ color: text }} sx={{ border: '3px solid',borderRadius:'15px', borderColor: 'primary.main' }}>
        <Phone />
      </IconButton>
      <Typography variant="h6"  style={{ color: text }}>123-456-7890</Typography>
    </Box>
    </Stack>
      </Stack>
    </ThemeProvider>
        </Box>
    )
}
export default ContactUs;
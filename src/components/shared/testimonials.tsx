import React, { useState, useEffect,useCallback } from 'react';
import {Stack, Box, Typography, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from '@/styles/testimonials.module.scss'
import DoctorRating from './ratings';

interface Testimonial {
  id: number;
  name: string;
  text: string;
  domain:string;
  rating: number;
}

interface DoctorRatingProps {
  
  initialValue?: number; // Optional initial value
}

interface TestimonialProps {
    quotationMark?: string;
    review: string;
    imageUrl: string;
    rating: string;
    reviewerName: string;
    treatmentDomain: string;

  }
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

const testimonialsData: Testimonial[] = [
  { id: 1, name: 'John Doe',domain:'Cancer Patient',rating:4, text: '“I want to express my appreciation for a very finely run and professional facility. Doctors always encouraged to ask questions.”' },
  { id: 2, name: 'Jane Smith',domain:'Customer Service',rating:4.5, text: '“I wish the world could know the wonderful things that are happening on the Doctorate hospital, who have had an injury that cured soon. "' },
  { id: 3, name: 'Alice Johnson',domain:'Leukemia Patient',rating:5, text: '“All the doctors,nurses,aides,food service,employees,security and maintenance workers deserve such praise for their attention & care.”' },
  { id: 4, name: 'Bob Brown',domain:'Orthopedics Patient',rating:4.5, text: '"I was struggling with chronic knee pain for years.My orthopedic surgeons transformed my life.I cannot thank them enough."'},
  { id: 5, name: 'Emma Davis',domain:'Cardiology Patient',rating:5, text: '“Expert care resolved chest pains, guiding successful treatment, significantly improving health. Highly recommend their services for cardiac concerns."' }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = useCallback(() => {
      if (currentIndex === 0) {
        setCurrentIndex(testimonialsData.length - 3);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }, [currentIndex]);
  
    const handleNext = useCallback(() => {
      if (currentIndex === testimonialsData.length - 3) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, [currentIndex]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }, [handleNext]);

    
  
    return (
        <Box sx={{ backgroundColor: '#F0F8FF', width: '100vw' }}>
      <Box sx={{ maxWidth: '700px', margin: 'auto', padding: '90px' }}>
      <Box  sx={{}} className={styles.testimonialscontainer} >
      <Stack spacing={3}>
      <Stack direction="row" align-items="center" justifyContent="items-start" spacing={0.5}>
          <Image src="/assets/heartline.svg" alt="bubble" height={40} width={40}></Image>
          <Typography variant="h6" fontWeight="bold" color="primary">
            TESTIMONIALS
        </Typography>
        </Stack>
        <ThemeProvider theme={theme} >
    <Stack justifyContent="center"
      alignItems="items-start" 
      
      
      spacing={3}><Typography variant="h3" fontWeight="bold">
        What Our Patient Says
        </Typography>
        
      </Stack>
    </ThemeProvider>
        <Stack direction="row" spacing={5} className={styles.testimonialslist} sx={{alignItems:'center', justifyContent:'center'}} >
          {testimonialsData.slice(currentIndex, currentIndex + 2).map(testimonial => (
            <Stack spacing={2} key={testimonial.id} className={styles.testimonial} sx={{backgroundColor:'white'}}>
            <Image src="/assets/comma.svg" alt='comma' width={40} height={40}></Image>
              <Typography variant="h5" className={styles.testimonialtext}>{testimonial.text}</Typography>
              <DoctorRating  initialValue={testimonial.rating} />
              <Typography variant="h5" fontWeight="bold" className={styles.testimonialname}>- {testimonial.name}</Typography>
              <Typography variant="h5" className={styles.testimonialname}>({testimonial.domain})</Typography>
            </Stack>
            
          ))}
        </Stack>
        <Box className="controls">
          <Button onClick={handlePrev} className={styles.prevbutton}><ChevronLeft /></Button>
          <Button onClick={handleNext} className={styles.nextbutton}><ChevronRight /></Button>
        </Box>
      </Stack>
      </Box>
      </Box>
    </Box>
        
    );
  }
  
  export default Testimonials;
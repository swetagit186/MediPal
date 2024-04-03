import React from "react"
import {Grid, FormControl, Select, InputLabel,SelectChangeEvent , MenuItem} from "@mui/material"
import { Typography, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from "next/image";
import Button from '@mui/material/Button';

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

const HeroPage=()=>{

  const [isHovered, setIsHovered] = useState(false);

    return (
      <Box
        sx={{
          backgroundImage: 'url("/images/bg-image.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // Set the desired height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <ThemeProvider theme={theme}>
          <Stack
            position="absolute"
            left="0" // Move Stack to the center horizontally
            top="50%"
            height="50%" // Set to half of the container height
            width="35%"
            justifyContent="center"
            alignItems="items-start"
            direction="column"
            style={{ transform: "translateX(0%) translateY(-50%)" }}
            spacing={3}
            p={18}
          >
            {/* Example of using Typography with custom font and boldness */}
            <Stack
              direction="row"
              align-items="center"
              justifyContent="items-start"
              spacing={0.5}
            >
              <Image
                src="/assets/bubble.svg"
                alt="bubble"
                height={40}
                width={40}
              ></Image>
              <Typography variant="h6" fontWeight="bold">
                SERVING TO THE PEOPLE SINCE 2000
              </Typography>
            </Stack>

            <Typography variant="h2" fontWeight="bold">
              On a Pursuit of Better Medicine
            </Typography>
            <Typography variant="body1">
              This is open to everyone every day and provides primary health
              care and cutting-edge medicine in a central location
            </Typography>
            <Button
            href='dashboard/doctors'
              sx={{
                height: "55px", // Adjust the height as needed
                width: "250px",
                fontWeight: "bold",
                borderRadius: "15px",
                "&:hover": {
                  color: "black", // Change text color on hover
                  borderColor: "primary.main",
                },
              }}
              variant={isHovered ? "outlined" : "contained"}
              color="primary"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              BOOK AN APPOINTMENT
            </Button>
          </Stack>
        </ThemeProvider>
      </Box>
    );}
export default HeroPage;
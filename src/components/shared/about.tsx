import { Stack, Typography,Container,Grid,Box,List, ListItem, ListItemText, Divider,IconButton  } from '@mui/material';
import Image from 'next/image';
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { StayPrimaryLandscape } from '@mui/icons-material';
import { CheckCircleOutline } from '@mui/icons-material';


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

const About=()=>{

    const [isHovered, setIsHovered] = useState(false);

    return (
      <Box
        sx={{
          backgroundColor: "#F0F8FF",
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          padding={15}
          style={{
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          {/* Left side with image */}
          <Box style={{ position: "absolute", bottom: 0 }}>
            <Image
              src="/images/doctorImage.png"
              alt="doctor"
              width={550}
              height={700}
              objectFit="cover"
            />
          </Box>
          {/* Right side with text */}
          <ThemeProvider theme={theme}>
            <Stack
              position="absolute"
              right="0" // Move Stack to the center horizontally
              top="50%"
              height="50%" // Set to half of the container height
              width="38%"
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
                spacing={2}
              >
                <Image
                  src="/assets/heartline.svg"
                  alt="bubble"
                  height={40}
                  width={40}
                ></Image>
                <Typography variant="h6" fontWeight="bold" color="primary">
                  ABOUT US
                </Typography>
              </Stack>

              <Typography variant="h3" fontWeight="bold">
                Welcome To Doctorate Central Hospital
              </Typography>
              <Typography variant="h6">
                Our team of highly trained professionals uses the latest healing
                technologies to restore you to pain-free health quickly and
                easily.
              </Typography>
              {/* <Stack color="primary"></Stack> */}
              <Box
                sx={{
                  backgroundColor: "",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#07306E",
                    padding: "25px",
                    borderRadius: "16px",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                    width: "95%",
                  }}
                >
                  <List
                    sx={{
                      padding: 1,
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ListItem
                      disableGutters
                      sx={{
                        width: "50%",
                        maxWidth: "50%",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box component="span" mr={1} color="primary.main">
                        <CheckCircleOutline />
                      </Box>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="white"
                            sx={{ fontSize: "20px" }}
                          >
                            20+ years of excellence
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      sx={{
                        width: "50%",
                        maxWidth: "50%",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box component="span" mr={1} color="primary.main">
                        <CheckCircleOutline />
                      </Box>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="white"
                            sx={{ fontSize: "20px" }}
                          >
                            Multi Speciality Hospital
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      sx={{
                        width: "50%",
                        maxWidth: "50%",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box component="span" mr={1} color="primary.main">
                        <CheckCircleOutline />
                      </Box>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="white"
                            sx={{ fontSize: "20px" }}
                          >
                            24 Hours Medical Service
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem
                      disableGutters
                      sx={{
                        width: "50%",
                        maxWidth: "50%",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Box component="span" mr={1} color="primary.main">
                        <CheckCircleOutline />
                      </Box>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body1"
                            color="white"
                            sx={{ fontSize: "20px" }}
                          >
                            Professional Experts
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                  <Stack
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <Button
                      href='dashboard/doctors'
                      sx={{
                        height: "70px", // Adjust the height as needed
                        width: "380px",
                        fontWeight: "bold",
                        borderRadius: "15px",
                        "&:hover": {
                          color: "white", // Change text color on hover
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
                </Box>
              </Box>
            </Stack>
          </ThemeProvider>
          {/* <Stack direction="column" spacing={2} alignItems="center">
          <Typography variant="h6" align="center">
            Heading
          </Typography>
          <Typography variant="body1" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </Typography>
        </Stack> */}
        </Stack>
      </Box>
    );
}

export default About;
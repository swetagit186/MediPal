import {Stack, Typography, Button, IconButton , Divider ,Hidden} from '@mui/material';
import React, { useState } from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Link } from '@mui/material';
import Hamburger from './hamburgerMenu';


import styles from "@/styles/shared/nav-bar.module.scss"
import { AppRegistrationRounded, CalendarTodayOutlined, FacebookOutlined, Instagram, LinkedIn, Logout, PhoneOutlined, Twitter, WifiCalling3 } from '@mui/icons-material';
import Image from 'next/image';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Space from './space';

const NavBar = ({currentButton, isAuthed} : {currentButton:number , isAuthed : boolean})=>{

  console.log( isAuthed );
  console.log("isAuthed " , isAuthed );

  const [currentButtonClicked, setcurrentButton] = useState<number | null>(currentButton);

  const handleClick = (buttonId: number) => { // Specify the type as number
    setcurrentButton(buttonId);
  };

    return (
      <div className={styles.mainContainer}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          gap={"10px"}
          justifyContent="space-between"
          margin={"0px 10%"}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "center", md: "" }}
          >
            <PhoneOutlined color="primary" />
            <Button variant="text">
              <Typography variant="h5" fontWeight={500} color="black">
                Call Us - (+91) 999 888 7770
              </Typography>
            </Button>
          </Stack>

          <Stack
            direction={"row"}
            gap={"10px"}
            justifyContent={{ xs: "center", md: "" }}
          >
            <IconButton
              aria-label="facebook"
              sx={{ "&:hover": { color: "#1976d2" } }}
              onClick={() => {}}
            >
              <Twitter />
            </IconButton>
            <IconButton
              aria-label="facebook"
              sx={{ "&:hover": { color: "#1976d2" } }}
              onClick={() => {}}
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              aria-label="facebook"
              sx={{ "&:hover": { color: "#1976d2" } }}
              onClick={() => {}}
            >
              <Instagram />
            </IconButton>
            <IconButton
              aria-label="facebook"
              sx={{ "&:hover": { color: "#1976d2" } }}
              onClick={() => {}}
            >
              <FacebookOutlined />
            </IconButton>
          </Stack>
        </Stack>
        <Divider orientation="horizontal" />
        <Stack
          direction={"row"}
          margin={"10px 10%"}
          justifyContent={"space-between"}
        >
          <Link href="/">
            <Image
              src={"/assets/MediPal.svg"}
              alt="Brand Logo"
              height={50}
              width={190}
            />
          </Link>

          <Hidden lgUp={true}>
            <Hamburger isAuthed={isAuthed} />
          </Hidden>

          <Hidden lgDown xlUp>
            <Stack direction={"row"} sx={{ alignItems: "center" }}>
              <Button
                variant="text"
                href="/dashboard"
                color={currentButton === 1 ? "primary" : "inherit"}
                onClick={() => handleClick(1)}
                sx={{ "&:hover": { color: "#1976d2" } }}
              >
                <Typography variant="h5" fontWeight={500}>
                  Dashboard
                </Typography>
              </Button>

              <Button
                variant="text"
                href="/dashboard/services"
                color={currentButton === 2 ? "primary" : "inherit"}
                sx={{ "&:hover": { color: "#1976d2" } }}
              >
                <Typography variant="h5" fontWeight={500}>
                  Services
                </Typography>
              </Button>
              <Button
                variant="text"
                href="/dashboard/doctors"
                color={currentButton === 3 ? "primary" : "inherit"}
                sx={{ "&:hover": { color: "#1976d2" } }}
              >
                <Typography variant="h5" fontWeight={500}>
                  Doctors
                </Typography>
              </Button>
              <Button
                variant="text"
                href="/dashboard/contactUs"
                color={currentButton === 4 ? "primary" : "inherit"}
                sx={{ "&:hover": { color: "#1976d2" } }}
              >
                <Typography variant="h5" fontWeight={500}>
                  Contact
                </Typography>
              </Button>
              {/* <LoginLink postLoginRedirectURL="/dashboard">Sign in</LoginLink> */}
              <Space direction="h" value="10px" />
              {isAuthed === false ? (
                <LoginLink postLoginRedirectURL="/dashboard">
                  <Button
                    color="success"
                    variant="contained"
                    // href="/contact-us"
                    startIcon={<AppRegistrationRounded />}
                    style={{
                      borderRadius: "10px",
                      marginLeft: "20px",
                      padding: "10px 30px",
                    }}
                  >
                    <Typography variant="h5" fontWeight={500}>
                      LogIn
                    </Typography>
                  </Button>
                </LoginLink>
              ) : null}
              <Space direction="h" value="10px" />
              {isAuthed === true ? (
                <LogoutLink postLogoutRedirectURL="/dashboard">
                  <Button
                    color="error"
                    variant="contained"
                    // href="/contact-us"
                    startIcon={<Logout />}
                    style={{
                      borderRadius: "10px",
                      marginLeft: "20px",
                      padding: "10px 30px",
                      alignSelf: "center",
                    }}
                  >
                    <Typography variant="h5" fontWeight={500}>
                      Logout
                    </Typography>
                  </Button>
                </LogoutLink>
              ) : null}
              <Button
                variant="contained"
                href="/dashboard/contactUs"
                startIcon={<CalendarTodayOutlined />}
                style={{
                  borderRadius: "30px",
                  marginLeft: "20px",
                  padding: "10px 30px",
                }}
              >
                <Typography variant="h5" fontWeight={500}>
                  Appointment
                </Typography>
              </Button>
            </Stack>
          </Hidden>
        </Stack>
      </div>
    );
}

export default NavBar;
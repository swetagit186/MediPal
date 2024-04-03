import React from 'react';
import {Stack, Typography, Grid, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';

import styles from "@/styles/shared/footer.module.scss";
import { PhoneCallback, PhoneInTalk } from '@mui/icons-material';
import Image from 'next/image';

const Footer: React.FC = () => {
  // const styles = usestyles();
  const router = useRouter();

  const handleCallButtonClick = () => {
    // Implement call functionality here
  };

  return (
    <footer className={styles.footer}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Image
            src={"/assets/MediPalF.svg"}
            alt="Brand Logo"
            height={50}
            width={190}
          />
          <Stack direction={"row"} gap="10px" className={styles.socialMedia}>
            <IconButton
              className={styles.iconButton}
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "12px",
                color: "white",
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              className={styles.iconButton}
              style={{
                borderWidth: "1px",
                borderStyle: "solid",
                padding: "12px",
                color: "white",
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              className={styles.iconButton}
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                padding: "12px",
                color: "white",
              }}
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              className={styles.iconButton}
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                padding: "12px",
                color: "white",
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>

          <Typography variant="h5">Crafted by Love ❤️ in India.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction={"row"} justifyContent={"left"} marginTop={"20px"}>
            <Typography variant="h4" fontWeight={600}>
              Explore
            </Typography>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={80} />
          </Stack>
          <Stack className={styles.exploreTab}>
            <Typography variant="h5" onClick={() => router.push("/licenses")}>
              Licenses
            </Typography>
            <Typography variant="h5" onClick={() => router.push("/404")}>
              404 Page
            </Typography>
            <Typography
              variant="h5"
              onClick={() => router.push("/privacy-policy")}
            >
              Privacy Policy
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack direction={"row"} justifyContent={"left"} marginTop={"20px"}>
            <Typography variant="h4" fontWeight={600}>
              Contact
            </Typography>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={80} />
          </Stack>
          <Stack className={styles.contactInfo}>
            <Typography
              variant="h5"
              sx={{ alignItems: "center", display: "flex", gap: "7px" }}
            >
              <LocationOnIcon />
              IIT BHU, Varanasi, UP
            </Typography>
            <Typography
              variant="h5"
              sx={{ alignItems: "center", display: "flex", gap: "7px" }}
            >
              <EmailIcon /> sweta@gmail.com
            </Typography>
            <Typography
              variant="h5"
              sx={{ alignItems: "center", display: "flex", gap: "7px" }}
            >
              <PhoneIcon /> +91 9988776655
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={7} md={3}>
          <Stack direction={"row"} justifyContent={"left"} marginTop={"20px"}>
            <Typography variant="h4" fontWeight={600}>
              Book Appointment
            </Typography>
            <Image src="/assets/wave.svg" alt="Wave" height={20} width={80} />
          </Stack>
          <div className={styles.bookAppointment}>
            <Typography variant="h5">
              The Doctorate staff members are well trained professionals.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCallButtonClick}
              sx={{
                borderRadius: "20px",
                height: "50px",
              }}
              startIcon={<PhoneInTalk />}
            >
              CALL +91 8877665544
            </Button>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

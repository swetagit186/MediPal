import React from 'react';
import { Typography, Grid, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRouter } from 'next/router';

import styles from "@/styles/shared/footer.module.scss";

// const usestyles = makestyles((theme) => ({
//   footer: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     padding: theme.spacing(4),
//     marginTop: theme.spacing(4),
//   },
//   socialMedia: {
//     marginTop: theme.spacing(2),
//   },
//   exploreTab: {
//     marginTop: theme.spacing(2),
//   },
//   contactInfo: {
//     marginTop: theme.spacing(2),
//   },
//   bookAppointment: {
//     marginTop: theme.spacing(2),
//   },
// }));

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
          <Typography variant="h6">Brand Logo</Typography>
          <div className={styles.socialMedia}>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Explore</Typography>
          <div className={styles.exploreTab}>
            <Typography variant="body1" onClick={() => router.push('/licenses')}>
              Licenses
            </Typography>
            <Typography variant="body1" onClick={() => router.push('/404')}>
              404 Page
            </Typography>
            <Typography variant="body1" onClick={() => router.push('/privacy-policy')}>
              Privacy Policy
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Contact Info</Typography>
          <div className={styles.contactInfo}>
            <Typography variant="body1">
              <LocationOnIcon /> Address
            </Typography>
            <Typography variant="body1">
              <EmailIcon /> Email
            </Typography>
            <Typography variant="body1">
              <PhoneIcon /> Phone Number
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">Book an Appointment</Typography>
          <div className={styles.bookAppointment}>
            <Typography variant="body1">
              The Doctorate staff members are well trained professionals.
            </Typography>
            <Button variant="contained" color="primary" onClick={handleCallButtonClick}>
              <PhoneIcon /> Call :Phone number
            </Button>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;

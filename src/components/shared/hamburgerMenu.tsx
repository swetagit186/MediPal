import { useState } from 'react';
import { Stack, Typography, Button, IconButton, Divider, Grid, Drawer, List, ListItem, ListItemText, Hidden, Link } from '@mui/material';
import { Menu } from '@mui/icons-material';
import styles from "@/styles/shared/nav-bar.module.scss";
import { AppRegistrationRounded, CalendarTodayOutlined, FacebookOutlined, Instagram, LinkedIn, Logout, PhoneOutlined, Twitter, WifiCalling3 } from '@mui/icons-material';
import { LoginLink, LogoutLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';
import Space from './space';

const Hamburger = ({ user, isAuthed }: { user: any, isAuthed: boolean }) => {
    const [clickedButton, setClickedButton] = useState<number | null>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = (buttonId: number) => {
        setClickedButton(buttonId);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={styles.mainContainer}>
            <Stack
                direction="row"
                gap={"10px"}
                justifyContent="space-between"
                margin={"0px 10%"}
            >
                {/* Phone number and social media icons */}

                {/* Hamburger menu visible only on small screens */}
                <Hidden mdUp>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleMenu}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Stack>

            {/* Drawer for hamburger menu */}
            <Drawer
                anchor="right" // Set anchor to right
                open={isMenuOpen}
                onClose={toggleMenu}
            >
                <div>
                    <List>
                        <ListItem button component={Link} href="/dashboard" color={clickedButton === 1 ? 'primary' : 'inherit'}  onClick={() => handleClick(1)} sx={{'&:hover': {color: '#1976d2', },}} >
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                        <ListItem button component={Link} href="/dashboard/services" color={clickedButton === 1 ? 'primary' : 'inherit'}  onClick={() => handleClick(1)} sx={{'&:hover': {color: '#1976d2', },}} >
                            <ListItemText primary="Services" />
                        </ListItem>
                        <ListItem button component={Link} href="/dashboard/doctors" color={clickedButton === 1 ? 'primary' : 'inherit'}  onClick={() => handleClick(1)} sx={{'&:hover': {color: '#1976d2', },}} >
                            <ListItemText primary="Doctors" />
                        </ListItem>
                        <ListItem button component={Link} href="/dashboard/contact" color={clickedButton === 1 ? 'primary' : 'inherit'}  onClick={() => handleClick(1)} sx={{'&:hover': {color: '#1976d2', },}} >
                            <ListItemText primary="Contact" />
                        </ListItem>
                        {/* Add more menu items here */}
                        <Space direction="h" value="10px" />
            {isAuthed === false ? (
              <LoginLink postLoginRedirectURL="/dashboard">
                <Button
                color='success'
                  variant="contained"
                  // href="/contact-us"
                  startIcon={<AppRegistrationRounded />}
                  style={{
                    borderRadius: "15px",
                    marginLeft: "15px",
                    padding: "6px 15px",
                    marginBottom:'8px'
                  }}
                >
                  <Typography variant="h5" fontWeight={500}>
                    LogIn
                  </Typography>
                </Button>
              </LoginLink>
            ): null}
            <Space direction="h" value="10px" />
            {isAuthed === true ? (
              <LogoutLink postLogoutRedirectURL="/dashboard">
                <Button
                  color='error'
                  variant="contained"
                  // href="/contact-us"
                  startIcon={<Logout />}
                  style={{
                    borderRadius: "15px",
                    marginLeft: "15px",
                    padding: "6px 15px",
                    marginBottom:'8px'
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
              href="/contact-us"
              startIcon={<CalendarTodayOutlined />}
              style={{
                borderRadius: "15px",
                marginLeft: "15px",
                marginRight:'10px',
                padding: "8px 15px",
              }}
            >
              <Typography variant="body2" fontWeight={400}>
                Appointment
              </Typography>
            </Button>
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Hamburger;
